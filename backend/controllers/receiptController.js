// backend/controllers/receiptController.js
const Receipt = require('../models/Receipt');
const Transaction = require('../models/Transaction');

exports.uploadReceipt = async (req, res) => {
    try {
        const { transactionId, image } = req.body;

        // Verify the transaction exists
        const transaction = await Transaction.findById(transactionId);
        if (!transaction) {
            return res.status(404).send({ error: 'Transaction not found' });
        }

        const receipt = new Receipt({ transactionId, image });
        await receipt.save();
        res.status(201).send(receipt);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.viewReceipts = async (req, res) => {
    try {
        const receipts = await Receipt.find({});
        res.status(200).send(receipts);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.viewReceipt = async (req, res) => {
    try {
        const receipt = await Receipt.findById(req.params.id);
        if (!receipt) {
            return res.status(404).send({ error: 'Receipt not found' });
        }
        res.status(200).send(receipt);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deleteReceipt = async (req, res) => {
    try {
        const receipt = await Receipt.findByIdAndDelete(req.params.id);
        if (!receipt) {
            return res.status(404).send();
        }
        res.status(200).send(receipt);
    } catch (error) {
        res.status(500).send(error);
    }
};