# GrayScale Blog

Welcome to GrayScale, a modern, professional blog template built with **React**, **Vite**, **TypeScript**, and **shadcn/ui**. This project provides a clean, fast, and fully-responsive front-end for a personal or professional blog.

## 🚀 Key Features

- **Modern Tech Stack**: Built with Vite for a lightning-fast development experience.
- **Statically-Typed**: Fully written in TypeScript for better maintainability and fewer runtime errors.
- **Beautifully Styled**: Uses Tailwind CSS for utility-first styling, with a professional theme defined in `src/index.css`.
- **Component-Based**: Leverages `shadcn/ui` for a beautiful, accessible, and customizable component library.
- **Fully Functional Pages**:
    - **Home Page**: A dynamic homepage featuring a post carousel and a filterable grid of all articles.
    - **Post Page**: A clean, readable layout for individual blog posts with social sharing and related articles.
    - **About Page**: A dedicated page with a functional contact form.
    - **Admin Mockup**: A simple admin panel to view all posts and a form to simulate creating new ones.
- **Client-Side Filtering**: Includes client-side search and category filtering on the homepage.
- **Dark Mode**: Built-in dark mode support, toggleable from the navigation bar.

## 🛠 Tech Stack

- **Framework**: React
- **Bundler**: Vite
- **Language**: TypeScript
- **Routing**: `react-router-dom` v6
- **Styling**: Tailwind CSS
- **UI Components**: `shadcn/ui`
- **Icons**: `lucide-react`
- **Notifications**: `sonner` and `react-toast`
- **State Management**: React Hooks (`useState`, `useMemo`, `useEffect`)

## 🏁 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You'll need [Node.js](https://nodejs.org/en/) (v18 or later) and `npm` installed on your machine.

### Installation & Running

1. **Clone the repository:**Bash
    
    `git clone https://github.com/your-username/manojreddypalla-blog.git`
    
2. **Navigate to the project directory:**Bash
    
    `cd manojreddypalla-blog`
    
 # manojreddypalla-blog

 A lightweight blog template built with React, Vite, TypeScript and Tailwind CSS. This README focuses on the repository layout and where to find key pieces of the app.

 ## Project Structure

 ```
 manojreddypalla-blog/
 ├── public/                 # Static assets (robots.txt, favicons, images)
 ├── src/                    # Main application source code
 │   ├── assets/             # Images, fonts and static assets used by the app
 │   ├── components/         # Reusable React components
 │   │   ├── ui/             # Unstyled shadcn/ui primitives (Button, Card, etc.)
 │   │   ├── common/         # Page-level shared components
 │   │   │   ├── BlogCard.tsx        # Component for a single post preview
 │   │   │   ├── CategoryFilter.tsx  # Filter buttons for the homepage
 │   │   │   ├── FeaturedCarousel.tsx# Carousel for featured posts
 │   │   │   ├── Footer.tsx          # Site-wide footer
 │   │   │   ├── Navbar.tsx          # Site-wide navigation bar
 │   │   │   └── NavLink.tsx         # Light wrapper for react-router's NavLink
 │   │   └── index.ts                # Barrel export for components
 │   ├── hooks/              # Custom React hooks
 │   │   ├── use-mobile.tsx  # Hook to detect mobile viewports
 │   │   ├── use-toast.ts    # Custom hook for toast notifications
 │   │   └── index.ts        # Barrel export for hooks
 │   ├── lib/                # Libraries and helper functions
 │   │   ├── blogData.ts     # <-- IMPORTANT: Static blog "database"
 │   │   ├── utils.ts        # Utility helpers (eg. cn for Tailwind classNames)
 │   │   └── index.ts        # Barrel export for lib
 │   ├── pages/              # Top-level page components (routing targets)
 │   │   ├── Index.tsx       # Homepage (/)
 │   │   ├── Post.tsx        # Single blog post page (/post/:slug)
 │   │   ├── About.tsx       # About page (/about)
 │   │   ├── Admin.tsx       # Admin mockup page (/admin)
 │   │   └── NotFound.tsx    # 404 catch-all page
 │   ├── styles/             # Global styles (optional: App.css, index.css)
 │   │   ├── index.css
 │   │   └── App.css
 │   ├── App.tsx             # Main app component (routing + layout)
 │   ├── main.tsx            # React entry point
 │   └── vite-env.d.ts       # Vite TypeScript types
 ├── .eslintrc.config.js     # ESLint configuration
 ├── components.json         # shadcn/ui configuration
 ├── index.html              # Vite HTML template
 ├── package.json            # Project dependencies & scripts
 ├── postcss.config.js       # PostCSS configuration (for Tailwind)
 ├── tailwind.config.ts      # Tailwind CSS configuration
 ├── tsconfig.json           # TypeScript configuration
 └── vite.config.ts          # Vite configuration
 ```

 Notes and conventions
 - Components under `src/components/ui` are low-level, unstyled/shadcn primitives.
 - `src/components/common` holds page-level reusable components (Navbar, Footer, BlogCard, etc.).
 - Barrel `index.ts` files (optional) make imports cleaner, e.g. `import { Navbar } from 'src/components'`.
 - Global styles are centralized under `src/styles` (you can keep `index.css` and `App.css` there).

 ## Where to add/edit content

 - Static blog data (posts) lives in `src/lib/blogData.ts`. This project uses a static array as a mock database. To add or update posts, edit that file.
 - The post content is rendered as HTML in `src/pages/Post.tsx` (the component uses `dangerouslySetInnerHTML`), so content in `blogData.ts` should be valid HTML strings.

 ## Minimal Getting Started

 1. Install dependencies:

 ```powershell
 npm install
 ```

 2. Start development server:

 ```powershell
 npm run dev
 ```

 3. Build for production:

 ```powershell
 npm run build
 ```

 ## Next steps I can do for you

 - Move files into the `common` folder and create barrel `index.ts` files, updating imports across the project.
 - Run a quick TypeScript check / lint & fix any import issues that appear after moving files.

 If you'd like me to perform the physical reorganization (move files and update imports), say "Go ahead — move files" and I will proceed.

 ---

 _Edited: formatted repository structure & clarified where to find posts and components._