# React Basics - Lab: GitHub Organization & Rick and Morty Explorer

This project is the resolution for the React module's basic laboratory. It consists of a web application that allows users to search for members of GitHub organizations, as well as explore characters from the Rick and Morty universe, successfully fulfilling all the proposed basic and optional requirements.

## 🚀 Implemented Features

### Basic Requirements Completed
- [x] **Default List:** Upon loading the app, it displays the member list of the `lemoncode` organization.
- [x] **Organization Search:** Includes a search bar that allows entering the name of any GitHub organization (e.g., `microsoft`) and updating the list dynamically.
- [x] **State Persistence:** When navigating to a member's detail page and returning, the typed search term and the current pagination page are maintained thanks to the use of the Context API.

### Optional Requirements Completed (Bonus)
- [x] **Pagination:** Implemented in the organization member list view.
- [x] **Material UI (MUI):** The entire user interface was built using `@mui/material` components for a clean and responsive design.
- [x] **Rick and Morty API:** Created an independent route and page to list characters from the show using its REST API.
- [x] **Character Search:** Implemented filtered search by character name.
- [x] **`useDebounce` Hook:** Created a generic custom hook to delay the search request while typing, optimizing performance and preventing excessive API calls.
- [x] **Detail Pages:** Implemented separate detailed views for both GitHub members and Rick and Morty characters.

## 🛠️ Technologies Used

- **Core:** React 19 (`^19.2.4`) and TypeScript.
- **Routing:** React Router DOM v7 (`^7.13.1`) using the modern `createBrowserRouter` standard.
- **Styles & UI:** Material UI (`@mui/material`) and Emotion.
- **Bundler:** Vite.
- **Linter & Formatter:** Biome (`@biomejs/biome`), configured to ensure code quality and consistency.

## 🏗️ Project Architecture

The project is structured following the principles of **Feature-Sliced Design (FSD)**, which promotes high scalability and low coupling between modules.

The main structure is as follows:
- `@app`: Global configuration, providers, and the router.
- `@pages`: Full application views (Lists and Details).
- `@widgets`: Independent, composite UI blocks (e.g., Layouts, Member/Character lists).
- `@features`: Functionalities that bring value to the user (e.g., Search bars).
- `@entities`: Business logic, data models, API fetch functions, and Context state for domain entities (Members, Characters).
- `@shared`: Reusable elements across the project (base UI components like the SearchBar, utilities, hooks like `useDebounce`, and base API clients).

## 💻 Installation and Setup

1. Clone the repository and navigate into the project directory:
   ```cd basic-lab```

2. Install the dependencies:
``` npm install # (Note: You can also use pnpm or bun if you prefer) ```
3. Start the development server: 
``` npm run dev # or if using bun: bun run dev ```
4. Open your browser and visit http://localhost:5173/ (or the port Vite provides in your terminal).

Available Scripts

```npm run dev``` - Starts the Vite development server.

```npm run build``` - Compiles TypeScript and builds the app for production.

```npm run lint``` - Runs Biome to check for formatting and linting errors.

```npm run lint:fix``` - Runs Biome to automatically fix linting errors.

```npm run format``` - Formats the source code using Biome.

```npm run preview``` - Starts a local static server to preview the production build.

