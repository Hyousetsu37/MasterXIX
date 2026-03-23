# 🐾 Digital Pet Image Marketplace

A modern, interactive React application built to browse and "purchase" curated images of kitties and puppies. This project demonstrates advanced state management, component composition, and modern frontend architecture.

## ✨ Features

* **Global Shopping Cart:** A persistent, collapsible shopping cart accessible from anywhere in the app, allowing users to review their selected items.
* **Synchronized State:** Checkbox states on the product grids are perfectly synchronized with the global cart. Removing an item from the cart instantly unchecks it on the product page.
* **Optimized Rendering:** utilizises `useMemo` for cart calculations, ensuring smooth performance and minimizing unnecessary re-renders.
* **Full Checkout Flow:** Includes a dedicated checkout page to review orders and complete the simulated purchase.
* **Dark Mode UI:** Styled from the ground up using Material UI (MUI) with a custom, sleek dark theme.

## 🏗️ Architecture: Feature-Sliced Design (FSD)

This project strictly adheres to **Feature-Sliced Design (FSD)** principles to maintain a decoupled and scalable codebase. 

* **`app/`**: Global setup, routing configuration (`react-router`), and theme providers.
* **`pages/`**: Routable components (`WelcomePage`, `KittiesPage`, `PuppiesPage`, `CheckoutPage`) that compose widgets.
* **`widgets/`**: High-level structural blocks (`Navbar`, `Cart`, `PictureList`) that orchestrate logic between multiple entities.
* **`entities/`**: Isolated domain models and contexts (`cart`, `picture`) that manage their own specific state and mock data without cross-contamination.

## 🛠️ Tech Stack

* **Core:** React 19, TypeScript, Vite
* **Routing:** React Router v7
* **Styling & UI:** Material UI (MUI), Emotion
* **Linting & Formatting:** Biome

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed. This project also includes a `bun.lock` file, meaning it was optimized for the [Bun](https://bun.sh/) runtime, though standard `npm` or `yarn` will work perfectly fine.

### Installation

1. Clone the repository and navigate into the project directory:
   ```cd optional-lab-images```

2. Install the dependencies:
``` npm install #or if using bun: bun install ```
3. Start the development server: 
``` npm run dev # or if using bun: bun run dev ```
4. Open your browser and visit http://localhost:5173/ (or the port Vite provides in your terminal).

Available Scripts

```npm run dev``` - Starts the Vite development server.

```npm run build``` - Compiles TypeScript and builds the app for production.

```npm run lint``` - Runs Biome to check for formatting and linting errors.

```npm run lint:fix``` - Runs Biome to automatically fix linting errors.

