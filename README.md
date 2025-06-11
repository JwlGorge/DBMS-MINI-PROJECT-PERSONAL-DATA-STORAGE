DBMS Mini Project: Personal Data Storage
A Node.js and Express-based web application designed for securely storing and managing personal data such as biodata, educational details, bank information, and important documents. This project demonstrates CRUD operations using MongoDB and follows a modular architecture with MVC principles.

Features
User Authentication (Register/Login)

Secure storage of:

Biodata

Educational Details

Bank Details

Documents

RESTful API routes

MongoDB for backend storage

Jade (Pug) templating for views

Middleware-based authentication

Tech Stack
Backend: Node.js, Express.js

Database: MongoDB

Templating: Jade (Pug)

Authentication: JWT

Other: Mongoose, Bcrypt, Dotenv

Setup Instructions
Clone this repository:

bash
Copy
Edit
git clone <repo-url>
cd DBMS-MINI-PROJECT-PERSONAL-DATA-STORAGE-master
Install dependencies:

bash
Copy
Edit
npm install
Configure environment variables:

Create a .env file in the root directory with the following:

bash
Copy
Edit
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Run the server:


/controllers    # Handles business logic
/models         # Mongoose models (User, Biodata, Bank, etc.)
/routes         # API routes (auth, biodata, bank, etc.)
/config         # Database connection setup
/views          # Jade templates
/public         # Static files (CSS)