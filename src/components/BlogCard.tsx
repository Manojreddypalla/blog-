import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";
import { BlogPost } from "@/lib/blogData";
import { Badge } from "@/components/ui/badge";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link to={`/post/${post.slug}`}>
      <article className="blog-card hover-lift group">
        <div className="aspect-video overflow-hidden bg-muted">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              {post.category}
            </Badge>
            <div className="flex items-center text-xs text-muted-foreground gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric"
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readTime} min read
              </span>
            </div>
          </div>

          <h3 className="text-xl font-bold font-serif line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>

          <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-3 pt-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm font-medium">{post.author.name}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}