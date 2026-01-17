import { Code, Palette, Rocket, Zap } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices",
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting beautiful UIs that engage and inspire users",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Shipping quality products efficiently without compromise",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and smooth user experiences",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-display text-sm tracking-widest">ABOUT ME</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
            Turning Ideas Into <span className="gradient-text">Reality</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Description */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 5 years of experience in web development, I specialize in building 
              modern, responsive applications using cutting-edge technologies. My journey 
              started with a curiosity for how things work, and has evolved into a passion 
              for creating impactful digital solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in the power of clean code and thoughtful design. Every project 
              is an opportunity to push boundaries and deliver something extraordinary.
            </p>

            {/* Tech Stack */}
            <div className="pt-6">
              <h3 className="font-display font-semibold text-foreground mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Docker", "AWS"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-lg glass-card text-sm font-medium hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Feature Cards */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card p-6 hover:border-primary transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
