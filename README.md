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
    
3. **Install dependencies:**Bash
    
    `npm install`
    
4. **Run the development server:**Bash
    
    `npm run dev`
    
    Your project will be running at `http://localhost:8080`.
    

## 📂 Project Structure

Here is an overview of the most important files and directories in this project:

`manojreddypalla-blog/
├── public/                 # Static assets (robots.txt, etc.)
├── src/
│   ├── components/         # Reusable React components (Navbar, BlogCard, etc.)
│   │   └── ui/             # shadcn/ui components (Button, Card, etc.)
│   ├── hooks/              # Custom React hooks (use-toast, use-mobile)
│   ├── lib/                # Core logic and utilities
│   │   ├── blogData.ts     # *** IMPORTANT: Your static blog "database" ***
│   │   └── utils.ts        # Tailwind's cn() utility
│   ├── pages/              # Top-level page components (Index, Post, About)
│   ├── App.tsx             # Main app component with route definitions
│   ├── index.css           # Global styles & Tailwind CSS theme variables
│   └── main.tsx            # Main entry point for the React application
├── tailwind.config.ts      # Tailwind configuration file
└── vite.config.ts          # Vite configuration file`

## 📝 How to Add Your Own Blog Posts

This project does not use a traditional database. Instead, it uses a **static data file** as a mock database.

**To add, edit, or remove blog posts, simply modify the `src/lib/blogData.ts` file.**

This file exports a `blogPosts` array. Each post object in the array follows the `BlogPost` interface:

TypeScript

`export interface BlogPost {
  id: string;
  title: string;
  slug: string;        // The URL-friendly version of the title
  excerpt: string;     // A short summary for the blog card
  content: string;     // The full post content (HTML or Markdown)
  author: {
    name: string;
    avatar: string;    // Path to author's image
    bio: string;
  };
  publishedAt: string; // Date in "YYYY-MM-DD" format
  readTime: number;    // Estimated read time in minutes
  category: string;    // "Technology", "Tutorials", etc.
  tags: string[];
  featured: boolean;   // `true` to show in the homepage carousel
  imageUrl: string;    // Path to the post's main image
}`

### Important Note on Post Content

The `src/pages/Post.tsx` component uses `dangerouslySetInnerHTML={{ __html: post.content }}` to render the blog content. This means you can write your content directly as an **HTML string** inside the `blogData.ts` file.

**Example `content` string:**

JavaScript

`content: `
  <h1>This is my post title</h1>
  <p>This is the first paragraph. It supports <strong>bold text</strong>.</p>
  <pre><code>
    // This is a code block
    console.log("Hello, World!");
  </code></pre>
  <img src="/path/to/image.jpg" alt="An image in the post" />
``

### Admin Panel

The `/admin` page is a **client-side mockup**. It reads from the same `blogData.ts` file. The "Create New Post" form will *not* save a new post to the file; it only simulates a successful submission by showing a toast notification. To permanently add a post, you must add it to the `blogData.ts` array.