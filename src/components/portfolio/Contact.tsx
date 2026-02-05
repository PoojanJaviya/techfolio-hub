import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
        </p>
        
        <div className="flex justify-center gap-6">
          <a
            href="mailto:poojanjaviya07@gmail.com"
            className="flex items-center gap-3 px-6 py-4 rounded-xl gradient-card border border-border hover:border-primary/30 transition-all duration-300 group"
          >
            <Mail className="w-6 h-6 text-primary" />
            <span className="text-foreground font-medium group-hover:text-primary transition-colors">Email</span>
          </a>
          
          <a
            href="https://github.com/PoojanJaviya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 rounded-xl gradient-card border border-border hover:border-primary/30 transition-all duration-300 group"
          >
            <Github className="w-6 h-6 text-primary" />
            <span className="text-foreground font-medium group-hover:text-primary transition-colors">GitHub</span>
          </a>
          
          <a
            href="https://linkedin.com/in/poojan-javiya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 rounded-xl gradient-card border border-border hover:border-primary/30 transition-all duration-300 group"
          >
            <Linkedin className="w-6 h-6 text-primary" />
            <span className="text-foreground font-medium group-hover:text-primary transition-colors">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;