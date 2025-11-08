import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";
import blog5 from "@/assets/blog-5.jpg";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  publishedAt: string;
  readTime: number;
  category: string;
  tags: string[];
  featured: boolean;
  imageUrl: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Web Development: Trends to Watch in 2025",
    slug: "future-of-web-development-2025",
    excerpt: "Explore the emerging technologies and methodologies that are shaping the future of web development, from AI-powered tools to edge computing.",
    content: `
# The Future of Web Development: Trends to Watch in 2025

The landscape of web development continues to evolve at a breathtaking pace. As we look ahead to 2025, several key trends are emerging that will fundamentally change how we build and interact with web applications.

## AI-Powered Development Tools

Artificial intelligence is no longer just a feature we add to our applications—it's becoming an integral part of our development workflow. From intelligent code completion to automated testing and bug detection, AI tools are making developers more productive than ever.

### Key Developments

1. **Natural Language to Code**: Tools that can generate production-ready code from simple descriptions
2. **Automated Code Reviews**: AI systems that can identify potential issues and suggest improvements
3. **Intelligent Debugging**: Systems that can predict and prevent bugs before they happen

## Edge Computing and Serverless Architecture

The move toward edge computing continues to accelerate, bringing computation closer to users and reducing latency dramatically. Combined with serverless architecture, this enables developers to build faster, more scalable applications with less infrastructure management.

## The Rise of Web Components

Web Components are finally coming into their own, offering a framework-agnostic way to build reusable UI elements. This standardization is making it easier to share components across projects and teams.

## Conclusion

The future of web development is exciting and full of possibilities. By staying informed about these trends and continuously learning, developers can position themselves at the forefront of this evolving industry.
    `,
    author: {
      name: "Sarah Chen",
      avatar: "/api/placeholder/100/100",
      bio: "Full-stack developer and technology writer with over 10 years of experience."
    },
    publishedAt: "2025-01-15",
    readTime: 8,
    category: "Technology",
    tags: ["Web Development", "AI", "Future Tech"],
    featured: true,
    imageUrl: blog1
  },
  {
    id: "2",
    title: "Building Scalable React Applications: Best Practices",
    slug: "scalable-react-applications",
    excerpt: "Learn proven strategies for building React applications that can grow with your business, from architecture patterns to performance optimization.",
    content: `
# Building Scalable React Applications: Best Practices

Creating a React application is easy. Building one that scales gracefully as your team and user base grows? That's a different challenge altogether.

## Component Architecture

The foundation of any scalable React application is a well-thought-out component architecture. Here are the key principles:

### 1. Component Composition

Break down your UI into small, reusable components. Each component should have a single responsibility and be easy to understand in isolation.

### 2. State Management

Choose the right state management solution for your needs. Not every application needs Redux or MobX—sometimes React's built-in state management is sufficient.

### 3. Code Splitting

Use dynamic imports and React.lazy to split your code into smaller chunks that load on demand. This dramatically improves initial load times.

## Performance Optimization

Performance is crucial for scalability. Here are some key strategies:

- Use React.memo for expensive components
- Implement virtual scrolling for long lists
- Optimize re-renders with useCallback and useMemo
- Monitor performance with React DevTools Profiler

## Conclusion

Building scalable React applications requires careful planning and adherence to best practices. By following these guidelines, you'll be well-equipped to handle growth and maintain a healthy codebase.
    `,
    author: {
      name: "Michael Rodriguez",
      avatar: "/api/placeholder/100/100",
      bio: "Senior React developer and architect specializing in large-scale applications."
    },
    publishedAt: "2025-01-12",
    readTime: 6,
    category: "Tutorials",
    tags: ["React", "JavaScript", "Best Practices"],
    featured: true,
    imageUrl: blog2
  },
  {
    id: "3",
    title: "The Art of Minimalist Design in Modern Web Applications",
    slug: "minimalist-design-web-apps",
    excerpt: "Discover how minimalist design principles can create more intuitive, focused user experiences that users love.",
    content: `
# The Art of Minimalist Design in Modern Web Applications

In an era of information overload, minimalist design has emerged as a powerful approach to creating web applications that are both beautiful and functional.

## Core Principles

Minimalist design isn't about removing features—it's about removing distractions. Every element should serve a purpose.

### Less is More

Focus on essential features and present them in the clearest way possible. Remove anything that doesn't contribute to the user's goals.

### White Space

White space (or negative space) is a powerful design tool. It helps guide the user's eye, creates visual hierarchy, and makes interfaces feel less cluttered.

### Typography

In minimalist design, typography often takes center stage. Choose fonts carefully and use them consistently to create hierarchy and emphasis.

## Color Palette

A restrained color palette is a hallmark of minimalist design. Often, this means working primarily with neutrals (grays, blacks, whites) and using one or two accent colors sparingly.

## Conclusion

Minimalist design is about intentionality. Every element should earn its place on the screen by serving the user's needs. When done well, minimalist design creates interfaces that are both elegant and highly functional.
    `,
    author: {
      name: "Emma Thompson",
      avatar: "/api/placeholder/100/100",
      bio: "UX/UI designer focused on creating clean, user-centered interfaces."
    },
    publishedAt: "2025-01-10",
    readTime: 5,
    category: "Lifestyle",
    tags: ["Design", "UX", "Minimalism"],
    featured: true,
    imageUrl: blog3
  },
  {
    id: "4",
    title: "Managing Remote Development Teams: Lessons Learned",
    slug: "managing-remote-dev-teams",
    excerpt: "Practical insights from managing distributed development teams across multiple time zones and cultures.",
    content: `
# Managing Remote Development Teams: Lessons Learned

The shift to remote work has transformed how development teams operate. After leading remote teams for five years, I've learned valuable lessons about what works and what doesn't.

## Communication is Everything

In remote teams, over-communication is better than under-communication. Establish clear channels for different types of communication:

- **Synchronous**: Video calls for complex discussions
- **Asynchronous**: Written documentation for everything else
- **Emergency**: A dedicated channel for urgent issues

## Building Trust

Trust is the foundation of successful remote teams. This means:

1. Setting clear expectations
2. Measuring outcomes, not hours
3. Being transparent about challenges
4. Celebrating wins, big and small

## Tools and Processes

The right tools make remote work seamless:

- Version control and CI/CD for code
- Project management tools for tracking
- Documentation platforms for knowledge sharing
- Communication tools for collaboration

## Work-Life Balance

Remote work can blur the lines between work and personal life. As a manager, it's important to:

- Respect working hours and time zones
- Encourage breaks and time off
- Lead by example in maintaining boundaries

## Conclusion

Managing remote development teams requires intentional effort, but the benefits—access to global talent, flexibility, and often higher productivity—make it worthwhile.
    `,
    author: {
      name: "James Wilson",
      avatar: "/api/placeholder/100/100",
      bio: "Engineering manager with experience leading remote teams at scale."
    },
    publishedAt: "2025-01-08",
    readTime: 7,
    category: "Business",
    tags: ["Remote Work", "Management", "Team Leadership"],
    featured: false,
    imageUrl: blog4
  },
  {
    id: "5",
    title: "TypeScript Tips: Advanced Patterns for Better Code",
    slug: "typescript-advanced-patterns",
    excerpt: "Level up your TypeScript skills with these advanced patterns and techniques that will make your code more maintainable and type-safe.",
    content: `
# TypeScript Tips: Advanced Patterns for Better Code

TypeScript has become the de facto standard for building large-scale JavaScript applications. Here are some advanced patterns that will take your TypeScript skills to the next level.

## Discriminated Unions

Also known as tagged unions, this pattern is incredibly useful for modeling data that can be in one of several states:

\`\`\`typescript
type Result<T> = 
  | { success: true; data: T }
  | { success: false; error: string };
\`\`\`

## Mapped Types

Mapped types let you create new types based on existing ones:

\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
\`\`\`

## Conditional Types

Conditional types allow you to express non-uniform type mappings:

\`\`\`typescript
type NonNullable<T> = T extends null | undefined ? never : T;
\`\`\`

## Template Literal Types

Build new string types using template literal syntax:

\`\`\`typescript
type HTTPMethod = 'GET' | 'POST';
type Endpoint = \`/api/\${string}\`;
type APIRoute = \`\${HTTPMethod} \${Endpoint}\`;
\`\`\`

## Conclusion

These advanced TypeScript patterns might seem complex at first, but they provide powerful tools for building robust, type-safe applications. Master these techniques and you'll write better, more maintainable code.
    `,
    author: {
      name: "Alex Kumar",
      avatar: "/api/placeholder/100/100",
      bio: "TypeScript enthusiast and open-source contributor."
    },
    publishedAt: "2025-01-05",
    readTime: 6,
    category: "Tutorials",
    tags: ["TypeScript", "JavaScript", "Programming"],
    featured: false,
    imageUrl: blog5
  }
];

export const categories = [
  "All",
  "Technology",
  "Tutorials",
  "Lifestyle",
  "Business"
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getRelatedPosts(currentPostId: string, category: string, limit: number = 3): BlogPost[] {
  return blogPosts
    .filter(post => post.id !== currentPostId && post.category === category)
    .slice(0, limit);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}