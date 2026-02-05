import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 gradient-hero relative">
      <div className="text-center max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="text-foreground">Hi, I'm </span>
          <span className="text-gradient">Poojan Javiya</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-delay-1">
          Computer Science Student | Backend & Machine Learning Engineer
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:glow-primary hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-border text-foreground font-medium transition-all hover:bg-secondary"
          >
            About Me
          </a>
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-10 animate-fade-in-delay-3 text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown className="w-6 h-6 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;