# Project Admin-Dashboard-Backend

This project involves creating a backend API to handle various requests from the
frontend, such as user authentication, data retrieval, and data storage. Below
are the key functionalities and endpoints that the API will provide.

## Key Features

- **API Endpoints**: Handle login, data retrieval, and data storage.
- **Authentication and Authorization**: Implement mechanisms for user
  authentication and authorization.
- **Data Storage**: Design the database structure and models for storing
  information about boards, columns, and cards. Provide mechanisms for CRUD
  operations.
- **Data Validation**: Ensure the correctness and integrity of incoming data
  before storing it.
- **Frontend Request Handling**: Process requests sent from the frontend and
  perform corresponding actions.
- **Database Integration**: Ensure a connection to the database and execute
  queries to retrieve, save, and update data.

## Basic Version

### Setup and Configuration

- Deploy a development server, connect necessary modules, and configure CORS.

### Error Handling and Server Responses

- Implement error handling on the server and pass understandable error messages
  to the client side.
- Ensure server responses with appropriate HTTP statuses (e.g., 200 OK, 400 Bad
  Request, 401 Unauthorized, 500 Internal Server Error).

### MongoDB Integration

- Initialize and connect MongoDB to the project.

### Deployment

- Deploy the backend on a hosting service like Render or similar.

## Routes and Endpoints

### Authentication and Authorization

- **POST** `/api/user/login`: Add user credentials.
- **POST** `/api/user/login`: Validate and authenticate user credentials.
- **GET** `/api/user/logout`: End the user session.
- **GET** `/api/user/user-info`: Return user's name and email.

### Dashboard

- **GET** `/api/dashboard`: Return overall statistics and lists.

### Customer

- **GET** `/api/customers/:customerId`: Return detailed customer information.

### Order

- **GET** `/api/orders`: Return a list of orders.
- **GET** `/api/orders?`: Return sorted and filtered orders.

### Product

- **GET** `/api/products`: Return a list of products and categories.
- **GET** `/api/products?`: Return sorted and filtered products.
- **POST** `/api/products`: Add a new product.
- **PUT** `/api/products/:productId`: Edit product information.
- **DELETE** `/api/products/:productId`: Delete a product.

### Supplier

- **GET** `/api/suppliers`: Return a list of suppliers.
- **POST** `/api/suppliers`: Add a new supplier.
- **PUT** `/api/suppliers/:supplierId`: Edit supplier information.

### Customer

- **GET** `/api/customers`: Return a list of customers.
