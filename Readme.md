## e-commerce Application

ShoppyGlobe is an e-commerce web application developed with Node.js, Express.js, and MongoDB. It features RESTful APIs for managing products, user authentication, and shopping cart functions. Users can securely register and log in via JWT-based authentication, access product details, and execute cart operations like adding, updating, and removing items. The backend undergoes testing with Thunder Client to verify API reliability.

## Features

- User registration and login with JWT authentication
- Fetch list of all products from MongoDB
- Fetch detailed information of a single product by ID
- Add products to cart (protected route)
- Increment product quantity if the same product is added again
- Update quantity of items in cart
- Remove items from cart
- Secure cart APIs accessible only to authenticated users
- Proper error handling and input validation
- MongoDB integration for persistent data storage

## Technology used

- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JSON Web Token (JWT)
- Thunder Client

## How to run the project

1. Clone the repository(if using git and github) or extract files (if using zip file)

2. Navigate to the shoppyglobe folder
   cd backend

3. Install dependencies (npm uses package-lock.json)
   npm install

4. Create a .env file in the backend folder and add: MONGO_URI, JWT_SECRET, PORT=3000

5. Start the server
   node server.mjs

## Flow of application

Authentication APIs

POST /api/auth/register – Register a new user

POST /api/auth/login – Login user and generate JWT token

Product APIs

GET /api/products – Fetch all products
GET /api/products/:id – Fetch product details by ID
Cart APIs (Protected)
POST /api/cart – Add product to cart
PUT /api/cart/:id – Update cart item quantity
DELETE /api/cart/:id – Remove product from cart

The backend application involves user authentication allowing registration and login for JWT token issuance. It includes product APIs to fetch all products or details of specific products stored in MongoDB. Authenticated users can manage their cart by adding, updating, or removing products, with all operations secured by JWT middleware. Testing is conducted using Thunder Client, and MongoDB Compass is used for data verification across users, products, and cart collections.

## Author

Samudyatha Karanth

## GitHub link

https://github.com/Samm005/e-commerce_App_Backend
