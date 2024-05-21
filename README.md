### README.md

# Finance Tracker Backend

## Project Overview

Finance Tracker is a comprehensive application designed to manage personal finances, including user authentication, account management, transaction tracking, and receipt handling.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Documentation](#documentation)

## Features

- **User Authentication:** Secure user registration and login using JWT.
- **Account Management:** Manage regular and credit accounts with CRUD operations.
- **Transaction Management:** Track transactions associated with accounts.
- **Receipt Handling:** Upload, view, and manage receipts linked to transactions.

## Technologies Used

- **Node.js** and **Express.js** for server and API development.
- **MongoDB Atlas** for cloud-based database management.
- **Mongoose** for MongoDB object modeling.
- **JWT** (JSON Web Tokens) for secure user authentication.
- **dotenv** for environment variable management.
- **bcryptjs** for password hashing.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/finance-tracker.git
   cd finance-tracker/backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file in the `backend` directory with the following contents:**
   ```plaintext
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

## Configuration

- **MongoDB Atlas:** Ensure your MongoDB Atlas cluster is up and running and the connection string is correctly set in the `.env` file.
- **Environment Variables:** Ensure the `.env` file contains the necessary environment variables for connecting to MongoDB and JWT secret.

## API Endpoints

### Authentication

- **Register:** `POST /api/auth/register`
  - Body: `{ "name": "John Doe", "email": "john@example.com", "password": "password123" }`

- **Login:** `POST /api/auth/login`
  - Body: `{ "email": "john@example.com", "password": "password123" }`

- **Profile:** `GET /api/auth/profile`
  - Headers: `Authorization: Bearer <token>`

### Regular Account Management

- **Create Regular Account:** `POST /api/accounts/regular`
  - Body: `{ "account_name": "Checking Account", "account_type": "Checking", "user_id": "<user_id>", "account_balance": 1000 }`

- **Get Regular Accounts:** `GET /api/accounts/regular`
  - Headers: `Authorization: Bearer <token>`

- **Update Regular Account:** `PATCH /api/accounts/regular/:id`
  - Body: (Updated fields)

- **Delete Regular Account:** `DELETE /api/accounts/regular/:id`
  - Headers: `Authorization: Bearer <token>`

### Credit Account Management

- **Create Credit Account:** `POST /api/accounts/credit`
  - Body: `{ "account_name": "Credit Card", "user_id": "<user_id>", "account_limit": 5000, "account_balance": 2000, "due_date": "2024-05-20" }`

- **Get Credit Accounts:** `GET /api/accounts/credit`
  - Headers: `Authorization: Bearer <token>`

- **Update Credit Account:** `PATCH /api/accounts/credit/:id`
  - Body: (Updated fields)

- **Delete Credit Account:** `DELETE /api/accounts/credit/:id`
  - Headers: `Authorization: Bearer <token>`

### Transaction Management

- **Create Transaction:** `POST /api/transactions/`
  - Body: `{ "accountId": "<account_id>", "transactionType": "debit", "transactionAmount": 100, "transactionDescription": "Payment", "transactionReceipt": true }`

- **Get Transactions:** `GET /api/transactions/`
  - Headers: `Authorization: Bearer <token>`

- **Get Single Transaction:** `GET /api/transactions/:id`
  - Headers: `Authorization: Bearer <token>`

- **Update Transaction:** `PATCH /api/transactions/:id`
  - Body: (Updated fields)

- **Delete Transaction:** `DELETE /api/transactions/:id`
  - Headers: `Authorization: Bearer <token>`

### Receipt Handling

- **Upload Receipt:** `POST /api/receipts/upload`
  - Body: `{ "transactionId": "<transaction_id>", "image": "<base64_or_image_url>" }`

- **View Receipts:** `GET /api/receipts/view`
  - Headers: `Authorization: Bearer <token>`

- **View Single Receipt:** `GET /api/receipts/:id`
  - Headers: `Authorization: Bearer <token>`

- **Delete Receipt:** `DELETE /api/receipts/:id`
  - Headers: `Authorization: Bearer <token>`

## Testing

- Use Postman or a similar API testing tool to test the endpoints.
- Ensure that the environment variables are correctly set up for testing.

## Documentation

- The `README.md` file contains setup instructions and API documentation.
- Further documentation can be added as necessary for additional features and functionalities.

---

### Project Status Summary

#### Backend Implementation
- **Completed:**
  - Setup project structure.
  - Initialize Node.js project and install dependencies.
  - Setup server and connect to MongoDB Atlas.
  - Implement user authentication.
  - Implement account management.
  - Implement transaction management.
  - Implement receipt handling.
  - Ongoing testing and validation.
  - Ongoing documentation.

#### Frontend Implementation
- **Pending:**
  - Setup project structure.
  - Design user interface.
  - Implement frontend functionality.
  - Integrate frontend with backend.
  - Comprehensive testing and validation.
  - Deployment.

### Next Steps

1. **Setup Frontend Project Structure:**
   - Initialize a new frontend project using React or your preferred frontend framework.

2. **Design User Interface:**
   - Create mockups and wireframes for key screens.

3. **Implement Frontend Functionality:**
   - Develop user authentication, dashboard, account management, transaction management, and receipt management functionalities.

4. **Integrate Frontend with Backend:**
   - Ensure seamless communication between frontend and backend.

5. **Testing and Validation:**
   - Perform thorough testing of frontend components and end-to-end functionality.

6. **Deploy the Application:**
   - Deploy both frontend and backend to their respective hosting services.