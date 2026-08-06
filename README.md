# Personal CV Website (React)

## Description
My personal portfolio website built with React. It showcases my projects, skills, and background through a clean and responsive user interface.

## Updates (2026 August)
- Remove pages about the detail of project. (Redirect to pages on Github instead)
- Small UI changes
- Add Swedish and Chinese language support

## Set up
1. Clone the project
2. Install vite `npm install -D vite @vitejs/plugin-react `
3. Install tailwindcss `npm install tailwindcss @tailwindcss/vite` 
4. Install typescript `npm install -D typescript @types/react @types/react-dom`
5. Install typescript `npm install i18next react-i18next i18next-browser-languagedetector`
6. run `npm run dev`

## Features
- Responsive design
- Client-side routing with React Router
- Clean and simple UI design

## Tech Stack
- React (Vite, React Router)
- Typescript
- Tailwind CSS

## Routes
The project structure stores page, style and layout into different folders to improve maintainability and scalability.

| Page Route | jsx |
|---|---|
| `/about` | `about.jsx` |
| `/projects` | `projects.jsx` |
| `/` | `home.jsx` |

This structure makes the project easier to maintain and navigate. When updates are needed, it is easier to identify where changes should be made.

`App.tsx` is used as the main routing component, while global stylesheets called `theme.css` and `global.css` manages the overall website theme and styling.

## Future Improvements
- Personal Blog