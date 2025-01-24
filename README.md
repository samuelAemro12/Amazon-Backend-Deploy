# Amazon Clone Backend

This is the backend for the Amazon Clone project, built using Node.js and Express.js. It complements the frontend written in React.js, deployed [here](https://samuel-amazon-clone-deploy.netlify.app/). The backend handles API requests, manages environment variables, and integrates payment processing via Stripe.

## Features

- API routes to support user interactions and product management.
- Secure handling of environment variables using `dotenv`.
- Cross-origin resource sharing (CORS) for frontend-backend communication.
- Integration with Stripe for handling payments.

## Technologies Used

- **Node.js**: Server-side runtime.
- **Express.js**: Lightweight framework for building API routes.
- **dotenv**: Manages environment variables in a `.env` file.
- **CORS**: Enables secure cross-origin requests.
- **Stripe**: Provides payment processing capabilities.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/samuelAemro12/Amazon-Backend-Deploy
   cd amazon-clone-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```env
   PORT=5000
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

4. Start the server:
   ```bash
   npm start
   ```

The server will start on `http://localhost:5000`.

## Author: 
Samuel Aemro Melese - https://github.com/samuelAemro12/
## Contact: 
Samuel Aemro - samuelaemrowork12@gmail.com

