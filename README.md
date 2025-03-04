Overview
This project is a simple Express.js application that demonstrates the fundamentals of creating RESTful APIs, using middleware, and handling errors. It includes routes for managing users and products, along with a custom logger middleware.

Features
RESTful API:

CRUD operations for users and products.

Middleware:

Custom logger to log request details (method, URL, timestamp).

Error Handling:

Global error handler to catch and respond to errors gracefully.

Environment Variables:

Use of .env to manage configuration (e.g., PORT).

Prerequisites
Before running the project, ensure you have the following installed:

Node.js (v14 or higher)

npm (comes with Node.js)

Setup
Clone the repository:

bash
Copy
git clone https://github.com/your-username/express-assignment.git
cd express-assignment
Install dependencies:

bash
Copy
npm install
Create a .env file:
Create a .env file in the root directory and add the following:

plaintext
Copy
PORT=3000
Start the server:

bash
Copy
node index.js
The server will start running at http://localhost:3000.

Project Structure
Copy
express-assignment/
│-- routes/
│ ├── userRoutes.js
│ ├── productRoutes.js
│-- middleware/
│ ├── logger.js
│-- controllers/
│ ├── userController.js
│ ├── productController.js
│-- index.js
│-- package.json
│-- README.md
│-- .env
API Endpoints
Users
Get all users:

Method: GET

URL: /api/users

Example:

bash
Copy
curl http://localhost:3000/api/users
Get a user by ID:

Method: GET

URL: /api/users/:id

Example:

bash
Copy
curl http://localhost:3000/api/users/1
Create a user:

Method: POST

URL: /api/users

Body: JSON object with user details.

Example:

bash
Copy
curl -X POST http://localhost:3000/api/users -H "Content-Type: application/json" -d '{"name": "John Doe"}'
Update a user:

Method: PUT

URL: /api/users/:id

Body: JSON object with updated user details.

Example:

bash
Copy
curl -X PUT http://localhost:3000/api/users/1 -H "Content-Type: application/json" -d '{"name": "Jane Doe"}'
Delete a user:

Method: DELETE

URL: /api/users/:id

Example:

bash
Copy
curl -X DELETE http://localhost:3000/api/users/1
Products
Get all products:

Method: GET

URL: /api/products

Example:

bash
Copy
curl http://localhost:3000/api/products
Get a product by ID:

Method: GET

URL: /api/products/:id

Example:

bash
Copy
curl http://localhost:3000/api/products/1
Create a product:

Method: POST

URL: /api/products

Body: JSON object with product details.

Example:

bash
Copy
curl -X POST http://localhost:3000/api/products -H "Content-Type: application/json" -d '{"name": "Laptop", "price": 999}'
Update a product:

Method: PUT

URL: /api/products/:id

Body: JSON object with updated product details.

Example:

bash
Copy
curl -X PUT http://localhost:3000/api/products/1 -H "Content-Type: application/json" -d '{"name": "Gaming Laptop", "price": 1299}'
Delete a product:

Method: DELETE

URL: /api/products/:id

Example:

bash
Copy
curl -X DELETE http://localhost:3000/api/products/1
Middleware
Logger:

Logs request details (method, URL, timestamp) to the console.

Applied globally to all routes.

Error Handling
Global Error Handler:

Catches and logs errors.

Responds with a 500 Internal Server Error and a JSON message:

json
Copy
{
"message": "Something went wrong!"
}
Testing
Start the server:

bash
Copy
node index.js
Test API endpoints:

Use Postman or curl to test the endpoints.

Example:

bash
Copy
curl http://localhost:3000/api/users
Documentation
API Documentation:

All available endpoints are documented in the API Endpoints section above.
