import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/lib/blogData";
import { cn } from "@/lib/utils";

interface FeaturedCarouselProps {
  posts: BlogPost[];
}

export default function FeaturedCarousel({ posts }: FeaturedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % posts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [posts.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  };

  const currentPost = posts[currentIndex];

  return (
    <div className="relative w-full h-[500px] md:h-[600px] rounded-xl overflow-hidden bg-surface-elevated">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={currentPost.imageUrl}
          alt={currentPost.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
        <div className="max-w-3xl space-y-6 animate-fade-in">
          <div className="flex items-center gap-4 text-sm text-foreground/80">
            <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full font-medium">
              {currentPost.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(currentPost.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric"
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {currentPost.readTime} min read
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold font-serif">
            {currentPost.title}
          </h2>

          <p className="text-lg text-foreground/80 line-clamp-2">
            {currentPost.excerpt}
          </p>

          <div className="flex items-center gap-4">
            <Link to={`/post/${currentPost.slug}`}>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Read Article
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <img
                src={currentPost.author.avatar}
                alt={currentPost.author.name}
                className="w-10 h-10 rounded-full border-2 border-background"
              />
              <span className="font-medium">{currentPost.author.name}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="pointer-events-auto bg-background/80 backdrop-blur-sm hover:bg-background"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="pointer-events-auto bg-background/80 backdrop-blur-sm hover:bg-background"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {posts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "h-2 rounded-full transition-all",
              index === currentIndex
                ? "w-8 bg-primary"
                : "w-2 bg-foreground/30 hover:bg-foreground/50"
            )}
          />
        ))}
      </div>
    </div>
  );
}