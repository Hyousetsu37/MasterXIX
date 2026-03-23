# React Básico - Laboratorio: Filtrado de Organización de GitHub y Rick & Morty

Este proyecto es la resolución del laboratorio básico del módulo de React. Consiste en una aplicación web que permite buscar miembros de organizaciones de GitHub, así como explorar personajes del universo de Rick and Morty, cumpliendo con todos los requisitos básicos y opcionales propuestos.

## 🚀 Características Implementadas

### Requisitos Básicos Completados
- [x] **Listado por defecto:** Al cargar la aplicación, se muestra el listado de miembros de la organización `lemoncode`.
- [x] **Búsqueda por organización:** Incluye un buscador que permite introducir el nombre de cualquier organización de GitHub (ej. `microsoft`) y actualizar el listado.
- [x] **Persistencia de estado:** Al navegar a la página de detalle de un miembro y volver atrás, se mantiene el término de búsqueda tecleado y la página actual gracias al uso del Context API.

### Puntos Opcionales Completados (Bonus)
- [x] **Paginación:** Implementada en la vista de la lista de miembros de la organización.
- [x] **Material UI (MUI):** Toda la interfaz de usuario ha sido construida utilizando componentes de `@mui/material` para un diseño limpio y responsivo.
- [x] **API de Rick and Morty:** Creación de una ruta y página independiente para listar los personajes de la serie utilizando su API REST.
- [x] **Búsqueda de Personajes:** Implementación de búsqueda filtrada por nombre de personaje.
- [x] **Hook `useDebounce`:** Creación de un custom hook genérico para retrasar la petición de búsqueda al escribir, optimizando el rendimiento y evitando llamadas excesivas a la API.
- [x] **Páginas de Detalle:** Implementación de vistas detalladas separadas tanto para los miembros de GitHub como para los personajes de Rick and Morty.

## 🛠️ Tecnologías Utilizadas

- **Core:** React 19 (`^19.2.4`) y TypeScript.
- **Enrutamiento:** React Router DOM v7 (`^7.13.1`) utilizando el nuevo estándar `createBrowserRouter`.
- **Estilos y UI:** Material UI (`@mui/material`) y Emotion.
- **Bundler:** Vite.
- **Linter & Formatter:** Biome (`@biomejs/biome`), configurado para asegurar la calidad y consistencia del código.

## 🏗️ Arquitectura del Proyecto

El proyecto está estructurado siguiendo los principios de **Feature-Sliced Design (FSD)**, lo que promueve una alta escalabilidad y un bajo acoplamiento entre módulos.

La estructura principal es la siguiente:
- `@app`: Configuración global, proveedores (providers) y enrutador (router).
- `@pages`: Vistas completas de la aplicación (Listados y Detalles).
- `@widgets`: Bloques de UI compuestos e independientes (ej. Layouts, Listas de miembros/personajes).
- `@features`: Funcionalidades que aportan valor al usuario (ej. Barras de búsqueda).
- `@entities`: Lógica de negocio, modelos de datos, llamadas a API (fetch) y estado (Context) de las entidades de dominio (Members, Characters).
- `@shared`: Elementos reusables en todo el proyecto (componentes UI base como el SearchBar, utilidades, hooks como `useDebounce` y clientes API base).

## 💻 Instalación y Ejecución

1. Clona el repositorio y navega el directorio del proyecto:
   ```cd basic-lab```
2. Instala las dependencias:
``` npm install #(Nota: También puedes usar pnpm o bun si lo prefieres). ```
3. Ejecuta el servidor de desarrollo:
``` npm run dev # or if using bun: bun run dev ```
4. Abre tu navegador en http://localhost:5173 (o el puerto que indique Vite en la consola).

Available Scripts

```npm run dev``` - Inicia el servidor de desarrollo Vite.

```npm run build``` - Compila la aplicación para producción.

```npm run lint``` - Ejecuta Biome para encontrar problemas en el código.

```npm run lint:fix``` - Ejecuta Biome y repara los problemas de linting automáticamente.

```npm run format``` - Formatea el código fuente utilizando Biome.

```npm run preview```- Inicia un servidor local estático para previsualizar el build de producción.

