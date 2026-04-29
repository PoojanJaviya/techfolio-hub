import { useReveal } from "@/hooks/useReveal";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  const { ref, isVisible } = useReveal();

  return (
    <section id="about" className="py-28 px-6 relative">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-[0.03]" />

      <div
        ref={ref}
        className={`container max-w-5xl mx-auto relative transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-14">
          <h2 className="section-heading">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-subheading mt-3">
            A quick snapshot of who I am and what drives me.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {/* Info cards row */}
          <div className="gradient-card rounded-2xl p-6 border border-border/50 flex items-start gap-4 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-black/10">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Education</p>
              <p className="text-xs text-muted-foreground mt-1">B.Tech IT (2024–2028)</p>
              <p className="text-xs text-muted-foreground">P.P. Savani University</p>
            </div>
          </div>
          <div className="gradient-card rounded-2xl p-6 border border-border/50 flex items-start gap-4 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-black/10">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Focus Areas</p>
              <p className="text-xs text-muted-foreground mt-1">Machine Learning</p>
              <p className="text-xs text-muted-foreground">Backend Development</p>
            </div>
          </div>
          <div className="gradient-card rounded-2xl p-6 border border-border/50 flex items-start gap-4 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-black/10">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Location</p>
              <p className="text-xs text-muted-foreground mt-1">Surat, Gujarat, India</p>
              <p className="text-xs text-muted-foreground">Open to remote work</p>
            </div>
          </div>
        </div>

        {/* Main bio card */}
        <div className="gradient-card rounded-2xl p-8 md:p-10 border border-border/50 space-y-5 hover:border-primary/10 transition-all duration-500">
          <p className="text-[15px] md:text-base text-muted-foreground leading-[1.8]">
            I'm a <span className="text-foreground font-medium">B.Tech IT student (2024–2028)</span> at{" "}
            <span className="text-foreground font-medium">P.P. Savani University</span>, passionate about building
            intelligent systems that solve real-world problems. My primary focus lies in{" "}
            <span className="text-foreground font-medium">Machine Learning</span> and{" "}
            <span className="text-foreground font-medium">Backend Development</span>, where I combine data-driven
            insights with robust, scalable architectures.
          </p>
          <p className="text-[15px] md:text-base text-muted-foreground leading-[1.8]">
            I have hands-on experience building end-to-end ML systems and production-ready APIs using{" "}
            <span className="text-foreground font-medium">FastAPI</span>,{" "}
            <span className="text-foreground font-medium">Flask</span>, and{" "}
            <span className="text-foreground font-medium">SQLAlchemy</span>. From training predictive models with
            Scikit-learn to designing secure, JWT-authenticated REST endpoints, I enjoy bridging the gap between
            data science and software engineering.
          </p>
          <p className="text-[15px] md:text-base text-muted-foreground leading-[1.8]">
            I'm actively seeking <span className="text-foreground font-medium">internships</span>,{" "}
            <span className="text-foreground font-medium">hackathons</span>, and{" "}
            <span className="text-foreground font-medium">freelance opportunities</span> to apply my skills,
            collaborate with talented teams, and continue growing as a developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;