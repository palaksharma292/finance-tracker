// backend/controllers/transactionController.js
const Transaction = require('../models/Transaction');
const RegularAccount = require('../models/RegularAccount');
const CreditAccount = require('../models/CreditAccount');

exports.createTransaction = async (req, res) => {
    try {
        const transaction = new Transaction(req.body);

        // Verify the account exists
        const account = await RegularAccount.findById(transaction.accountId) || await CreditAccount.findById(transaction.accountId);
        if (!account) {
            return res.status(404).send({ error: 'Account not found' });
        }

        // Update account balance
        account.account_balance += (transaction.transactionType === 'credit' ? transaction.transactionAmount : -transaction.transactionAmount);
        await account.save();

        await transaction.save();
        res.status(201).send(transaction);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({});
        res.status(200).send(transactions);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
        if (!transaction) {
            return res.status(404).send({ error: 'Transaction not found' });
        }
        res.status(200).send(transaction);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!transaction) {
            return res.status(404).send({ error: 'Transaction not found' });
        }
        res.status(200).send(transaction);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndDelete(req.params.id);
        if (!transaction) {
            return res.status(404).send({ error: 'Transaction not found' });
        }
        res.status(200).send(transaction);
    } catch (error) {
        res.status(500).send(error);
    }
};
