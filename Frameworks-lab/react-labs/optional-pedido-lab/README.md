# Gestión de Pedidos - React Lab

A modern React application for managing and validating supplier orders ("Pedidos a proveedor"). This project serves as a practical implementation of advanced React patterns, complex state management, and scalable frontend architecture.

## 🚀 Features

- **Dynamic Order Management**: View order details, including client information, dates, and order lines.
- **Line Validation**: Selectively validate or invalidate individual order lines.
- **Real-time Calculations**: Automatically recalculates the total order amount and completion percentage as lines are modified.
- **Amount Editing**: Inline editing of monetary amounts for specific order lines.
- **Conditional Submission**: The "Enviar" (Submit) button is exclusively enabled when 100% of the order lines are successfully validated.

## 🏗️ Architecture: Feature-Sliced Design (FSD)

This project strictly adheres to the **Feature-Sliced Design (FSD)** architectural methodology to ensure high cohesion, low coupling, and scalable code organization.

- **`app/`**: Global application setup, routing, and overarching providers.
- **`pages/`**: Routable components (`OrderPage`) that orchestrate widgets and trigger initial data fetching.
- **`widgets/`**: Independent, composed UI blocks (`OrdersHeader`, `OrdersList`).
- **`features/`**: User interactions that bring business value (`ToggleLine`).
- **`entities/`**: Domain-specific business logic and "dumb" UI components (`Order`, `OrderInfo`, `OrderLine`).
- **`shared/`**: Reusable utilities, API configurations, and generic UI components.

## 🧠 Advanced React Patterns Implemented

This project prioritizes performance and prevents unnecessary re-renders using several advanced React paradigms:

### 1. Split Context Architecture
Instead of a single global context, the order state is divided into two distinct contexts:
- `OrderStateContext`: Holds dynamic data (`orderInfo`, `totalAmount`, `selectedLines`).
- `OrderDispatchContext`: Holds stable, memoized action functions (`changeLineState`, `toggleCheckbox`).
*Benefit: Components that only trigger actions do not needlessly re-render when the application state changes.*

### 2. Optimized List Rendering
The `OrdersList` component decouples global state from its children. 
- Individual `OrderLine` components are wrapped in `React.memo`.
- Parent components handle state selection and pass simple primitive props (`isChecked`) down to the children.
*Benefit: Clicking a checkbox in a table of 50 items only re-renders the specific item clicked, not the entire list.*

### 3. State Management with `useReducer`
Complex state transitions (like mapping over nested arrays to update specific line amounts or statuses) are centralized in a pure `orderReducer` function, keeping component files clean and logic highly testable.

### 4. Zero-Overhead Formatters
Expensive JavaScript API instantiations, such as `Intl.DateTimeFormat` and `Intl.NumberFormat`, are defined entirely outside the React component lifecycle to ensure they are parsed only once per file execution, guaranteeing zero render overhead.

## 🛠️ Tech Stack

- **Framework**: React 18+ (with TypeScript)
- **State Management**: React Context API + `useReducer`
- **Styling & Components**: Material-UI (MUI v5)
- **Build Tool**: Vite

## 📦 Getting Started

### Prerequisites
Ensure you have Node.js and your preferred package manager (npm, yarn, pnpm, or bun) installed.

### Installation

1. Clone the repository and navigate into the project directory:
   ```cd optional-lab-images```

2. Install the dependencies:
``` npm install #or if using bun: bun install ```
3.1 Start the mock server: 
``` npm run server # or if using bun: bun run server ```
3.2 Start the development server: 
``` npm run dev # or if using bun: bun run dev ```
4. Open your browser and visit http://localhost:5173/ (or the port Vite provides in your terminal).

Available Scripts

```npm run dev``` - Starts the Vite development server.

```npm run build``` - Compiles TypeScript and builds the app for production.

```npm run lint``` - Runs Biome to check for formatting and linting errors.

```npm run lint:fix``` - Runs Biome to automatically fix linting errors.

