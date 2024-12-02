# ShoppyGlobe E-Commerce Application

ShoppyGlobe is a fully functional e-commerce web application built with React, Redux, and React Router. It allows users to browse products, add items to their cart, update quantities, and view detailed product information. The app features a responsive design and persistent cart functionality.

## Features

- **Browse Products**: View a list of products with images, titles, and prices.
- **Add to Cart**: Add products to the cart and modify quantities.
- **Cart Management**: View the cart with options to remove items or adjust quantities.
- **Responsive Design**: Fully responsive for desktop, tablet, and mobile devices.
- **Persistent Cart**: Cart data is saved in local storage, so it persists across page refreshes.

## Technologies Used

- **React**: For building the user interface.
- **Redux**: For state management (e.g., cart items and quantities).
- **React Router**: For handling routing and navigation.
- **CSS**: For styling the app, ensuring a responsive design.

## Setup and Installation

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/your-username/shoppyglobe.git
    ```

2. Navigate to the project directory:
    ```bash
    cd shoppyglobe
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm start
    ```

5. Open your browser and go to [http://localhost:3000](http://localhost:3000).

## Project Structure

- **src/components**: Contains all React components, including Header, ProductList, ProductItem, Cart, and more.
- **src/redux**: Contains Redux actions, reducers, and store configurations.
- **src/assets**: Stores images and icons used in the app.
