import { ExternalLink, Github, ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "CyberDash",
      description: "A futuristic analytics dashboard with real-time data visualization and AI-powered insights.",
      tags: ["React", "D3.js", "Node.js", "MongoDB"],
      image: "from-primary/20 to-secondary/20",
    },
    {
      title: "NeuroChat",
      description: "AI-powered chat application with natural language processing and sentiment analysis.",
      tags: ["Next.js", "OpenAI", "PostgreSQL", "Redis"],
      image: "from-secondary/20 to-primary/20",
    },
    {
      title: "MetaStore",
      description: "E-commerce platform with AR product visualization and crypto payment integration.",
      tags: ["React", "Three.js", "Stripe", "Web3"],
      image: "from-primary/20 to-accent/20",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-display text-sm tracking-widest">PORTFOLIO</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of my recent work that showcases my skills and passion for development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group glass-card overflow-hidden hover:border-primary transition-all duration-500"
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 holographic-effect opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-2xl font-bold text-primary/50">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg glass-card font-display font-semibold tracking-wide hover:border-primary hover:text-primary transition-colors group"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
