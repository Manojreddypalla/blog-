import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Twitter, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function About() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center space-y-6 mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold font-serif">
              About <span className="text-gradient">GrayScale</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A modern platform for sharing insights, stories, and ideas that
              matter.
            </p>
          </div>

          {/* Mission Section */}
          <section className="mb-20 animate-slide-up">
            <div className="bg-surface-elevated rounded-xl p-8 md:p-12 shadow-card">
              <h2 className="text-3xl font-bold font-serif mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                GrayScale was founded with a simple mission: to create a space
                where ideas can flourish and meaningful conversations can happen.
                We believe in the power of well-crafted content to inspire,
                educate, and connect people across the globe.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our platform brings together writers, thinkers, and creators who
                are passionate about sharing their expertise and experiences. From
                technology trends to lifestyle insights, we cover topics that
                matter to modern professionals and curious minds.
              </p>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold font-serif mb-8 text-center">
              What We Stand For
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg p-6 shadow-card hover-lift">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Content</h3>
                <p className="text-muted-foreground">
                  Every article is carefully crafted and reviewed to ensure it
                  provides real value to our readers.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-card hover-lift">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Diverse Voices</h3>
                <p className="text-muted-foreground">
                  We celebrate different perspectives and experiences from writers
                  around the world.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 shadow-card hover-lift">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We're constantly evolving our platform to provide the best
                  reading and writing experience.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="bg-surface-elevated rounded-xl p-8 md:p-12 shadow-card">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold font-serif mb-6 text-center">
                Get in Touch
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Have questions, feedback, or want to contribute? We'd love to hear
                from you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell us what's on your mind..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-center text-sm text-muted-foreground mb-4">
                  Or connect with us on social media
                </p>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}