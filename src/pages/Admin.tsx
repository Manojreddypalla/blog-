import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import { blogPosts } from "@/lib/blogData";
import { useToast } from "@/hooks/use-toast";

export default function Admin() {
  const { toast } = useToast();
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "Technology",
    excerpt: "",
    content: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Post created!",
      description: "Your blog post has been published successfully.",
    });
    setIsCreating(false);
    setFormData({ title: "", category: "Technology", excerpt: "", content: "" });
  };

  if (isCreating) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-4xl font-bold font-serif">Create New Post</h1>
              <Button variant="outline" onClick={() => setIsCreating(false)}>
                Cancel
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Card className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <Input
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    placeholder="Enter post title..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-border rounded-md bg-background"
                  >
                    <option>Technology</option>
                    <option>Tutorials</option>
                    <option>Lifestyle</option>
                    <option>Business</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Excerpt</label>
                  <Textarea
                    value={formData.excerpt}
                    onChange={(e) =>
                      setFormData({ ...formData, excerpt: e.target.value })
                    }
                    placeholder="Brief description of your post..."
                    rows={3}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Content (Markdown supported)
                  </label>
                  <Textarea
                    value={formData.content}
                    onChange={(e) =>
                      setFormData({ ...formData, content: e.target.value })
                    }
                    placeholder="Write your post content here..."
                    rows={15}
                    required
                  />
                </div>

                <div className="flex gap-4">
                  <Button type="submit" size="lg" className="flex-1">
                    Publish Post
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      toast({
                        title: "Draft saved",
                        description: "Your post has been saved as a draft.",
                      });
                    }}
                  >
                    Save Draft
                  </Button>
                </div>
              </Card>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold font-serif mb-2">
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground">
                Manage your blog posts and content
              </p>
            </div>
            <Button size="lg" onClick={() => setIsCreating(true)}>
              <Plus className="mr-2 h-4 w-4" />
              New Post
            </Button>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <div className="text-2xl font-bold mb-1">
                {blogPosts.length}
              </div>
              <div className="text-sm text-muted-foreground">Total Posts</div>
            </Card>
            <Card className="p-6">
              <div className="text-2xl font-bold mb-1">
                {blogPosts.filter((p) => p.featured).length}
              </div>
              <div className="text-sm text-muted-foreground">Featured</div>
            </Card>
            <Card className="p-6">
              <div className="text-2xl font-bold mb-1">1.2k</div>
              <div className="text-sm text-muted-foreground">Total Views</div>
            </Card>
            <Card className="p-6">
              <div className="text-2xl font-bold mb-1">320</div>
              <div className="text-sm text-muted-foreground">Comments</div>
            </Card>
          </div>

          {/* Posts List */}
          <Card className="p-6">
            <h2 className="text-2xl font-bold font-serif mb-6">All Posts</h2>
            <div className="space-y-4">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                >
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold truncate">{post.title}</h3>
                      {post.featured && (
                        <Badge variant="secondary" className="text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}