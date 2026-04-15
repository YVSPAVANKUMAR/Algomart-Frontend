# Algomart E-commerce Site

Algomart is a static multi-page e-commerce demo built with HTML, CSS, Bootstrap, Tailwind CSS, and vanilla JavaScript. It simulates a simple online shopping experience with product browsing, cart management, checkout, discount calculation, and order history using `localStorage`.

## Features

- Responsive home page with featured categories and trending products
- Product listing page with category filters
- Add-to-cart flow backed by browser `localStorage`
- Cart page with quantity updates, removal, and total calculation
- Checkout page with discount rules and order placement
- Orders page with active and cancelled order history
- Pricing page with discount tiers and a discount calculator

## Pages

- `index.html`: landing page and featured sections
- `products.html`: category-based product catalog
- `cart.html`: cart summary and checkout entry point
- `checkout.html`: order review and placement flow
- `orders.html`: placed orders, cancellations, and undo support
- `pricing.html`: discount offers and calculator

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- [Bootstrap 5](https://getbootstrap.com/)
- [Tailwind CSS](https://tailwindcss.com/) via CDN
- [Bootstrap Icons](https://icons.getbootstrap.com/) via CDN

## Project Structure

```text
.
|-- assets/
|   |-- js/
|   |   |-- products.js
|   |   `-- script.js
|   `-- styles.css
|-- images/
|-- cart.html
|-- checkout.html
|-- index.html
|-- orders.html
|-- pricing.html
|-- products.html
`-- README.md
```

## How It Works

Product data is defined in `assets/js/products.js`. Cart and order state are stored in the browser using these `localStorage` keys:

- `cart`
- `orders`
- `cancelledOrders`

Discount rules used across the cart, checkout, and pricing flow:

- Below `500`: no discount
- `500` to `998.99`: 10% discount
- `999` and above: 20% discount

## Run Locally

Because this is a static site, there is no build step.

1. Clone or download the repository.
2. Open `index.html` in a browser.

For a smoother local development experience, you can also serve the folder with any simple static server, such as the VS Code Live Server extension.

## Notes

- This project is front-end only and does not include a backend or payment integration.
- Data is stored per browser, so cart and order history reset if `localStorage` is cleared.
- External styles and icons are loaded from CDNs, so an internet connection is needed for those assets.

