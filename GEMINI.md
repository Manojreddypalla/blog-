## Project Overview

This project is a modern, professional blog template named "GrayScale". It is built with a tech stack that includes **React**, **Vite**, **TypeScript**, and **shadcn/ui**. The front-end is designed to be clean, fast, and fully responsive, making it suitable for a personal or professional blog.

The blog features a dynamic homepage with a post carousel and a filterable grid of articles. It includes a clean layout for individual blog posts with social sharing and related articles, a dedicated "About" page with a contact form, and a simple admin panel mockup. The project also supports client-side search, category filtering, and a dark mode feature.

## Building and Running

To get the project up and running, you need to have Node.js (v18 or later) and npm installed.

### Key Commands

*   **Install Dependencies:**
    ```bash
    npm install
    ```

*   **Run Development Server:**
    ```bash
    npm run dev
    ```

*   **Build for Production:**
    ```bash
    npm run build
    ```

*   **Lint the Code:**
    ```bash
    npm run lint
    ```

## Development Conventions

The project follows standard conventions for a React/TypeScript project.

*   **Styling:** The project uses **Tailwind CSS** for utility-first styling. A professional theme is defined in `src/index.css`.
*   **Components:** The project leverages **shadcn/ui** for a beautiful, accessible, and customizable component library.
*   **State Management:** State is managed using React Hooks, including `useState`, `useMemo`, and `useEffect`.
*   **Routing:** Client-side routing is handled by **react-router-dom v6**.
*   **Data:** The blog's content is managed through a static array in `src/lib/blogData.ts`, which serves as a mock database. To add or update posts, you can edit this file.
*   **Content Rendering:** The post content is rendered as HTML in `src/pages/Post.tsx` using `dangerouslySetInnerHTML`, so the content in `blogData.ts` should be valid HTML strings.
