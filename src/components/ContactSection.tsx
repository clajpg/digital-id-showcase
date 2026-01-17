import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@alexcyber.dev" },
    { icon: MapPin, label: "Location", value: "Jakarta, Indonesia" },
    { icon: Phone, label: "Phone", value: "+62 812 3456 7890" },
  ];

  return (
    <section id="contact" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-display text-sm tracking-widest">CONTACT</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="font-display text-xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="glass-card h-48 relative overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2 animate-bounce" />
                  <p className="text-sm text-muted-foreground">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-display font-semibold tracking-wide flex items-center justify-center gap-2 hover:shadow-[var(--neon-glow)] transition-shadow"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
