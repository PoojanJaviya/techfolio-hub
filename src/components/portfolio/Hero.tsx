import { ArrowDown, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left – Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-in">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6 tracking-wide uppercase">
                Available for opportunities
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight font-heading animate-fade-in-delay-1">
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-gradient">Poojan Javiya</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-3 animate-fade-in-delay-2 font-medium">
              Computer Science Student | Backend Developer | Machine Learning Enthusiast
            </p>

            <p className="text-base text-muted-foreground/70 mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in-delay-2 leading-relaxed">
              I build intelligent backend systems and machine learning solutions that solve real-world problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-delay-3">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98]"
              >
                View Projects
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-border text-foreground font-semibold text-sm transition-all duration-300 hover:bg-white/5 hover:border-primary/30 active:scale-[0.98]"
              >
                About Me
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-3 mt-8 justify-center lg:justify-start animate-fade-in-delay-4">
              <a
                href="https://github.com/PoojanJaviya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/poojan-javiya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right – Avatar */}
          <div className="flex-shrink-0 animate-fade-in-delay-2">
            <div className="relative">
              {/* Glow ring behind avatar */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-purple-500/20 to-pink-500/20 blur-2xl scale-110 animate-pulse-ring" />
              
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-border/50 shadow-2xl animate-float">
                <img
                  src="/avatar.png"
                  alt="Poojan Javiya"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative orbiting dot */}
              <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-primary/60 blur-[2px]" />
              <div className="absolute -bottom-1 -left-3 w-3 h-3 rounded-full bg-purple-400/40 blur-[2px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in-delay-4 text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;