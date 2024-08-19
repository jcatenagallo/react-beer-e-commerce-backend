# React Beer E-Commerce Backend

Welcome to the React Beer E-Commerce Backend!

First of all. This app is deployed here:
https://react-beer-e-commerce-backend.vercel.app

## Description

This project, crafted with NestJS, comprises two delightful modules:
1. **Products List Module**: Provides a comprehensive list of beer products.
2. **Stock and Price Module**: Delve into specific stock and price information for beer products based on an id.

## How to Run Locally with Yarn (Port: 8000)
### Step-by-Step Guide:
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies using Yarn: `yarn install`.
4. Start the server locally: `yarn run start:dev`.
5. Access the application in your browser at `http://localhost:8000`.

## Requirements
- Develop a simple backend server with two API endpoints to serve product and size-variants information.
- Utilize `products.js` and `stock-price.js` to power your endpoints.
- Endpoint 1: `/api/products` - Retrieves details of all beer products.
- Endpoint 2: `/api/stock-price/[sku]` - Fetches price and stock information for a specific size-variant.

## Consuming Application
Is consuming for this project:
https://github.com/jcatenagallo/react-beer-e-commerce

Here you can see the deploy: 
https://react-beer-e-commerce.vercel.app/products

## Improvements
- **Authentication Logic**: Enhance security with authentication mechanisms.
- **Product-specific Endpoint**: Implement endpoints for detailed product information.
- **Optimized Products Endpoint**: Streamline the `/products` endpoint for improved frontend performance.


