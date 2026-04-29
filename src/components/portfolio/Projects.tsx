import { Github, ExternalLink, HeartPulse, MessageSquareText, Crown } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const projects = [
  {
    title: "Drug Interaction Alert System",
    description:
      "An ML-powered system that detects potentially dangerous drug–drug interactions, helping healthcare professionals make safer prescription decisions. Integrates with the Gemini API for intelligent analysis and uses ensemble classification models for accurate predictions.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Gemini API"],
    github: "https://github.com/PoojanJaviya/drug-interaction-alert-system",
    icon: HeartPulse,
    accent: "from-red-500/20 to-orange-500/20",
  },
  {
    title: "SQL Chat Assistant",
    description:
      "A natural-language-to-SQL query engine that empowers non-technical users to interact with databases using plain English. Features NLP parsing, intelligent query construction, and real-time query execution with formatted results.",
    tech: ["Python", "NLP", "SQL", "FastAPI"],
    github: "https://github.com/PoojanJaviya/sql-chat-assistant",
    icon: MessageSquareText,
    accent: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Chess Pairing System",
    description:
      "A backend system for managing chess tournament pairings with real-world Swiss-system and round-robin logic. Handles player registration, round management, and automated pairing generation for competitive events.",
    tech: ["Python", "Flask", "SQLite", "Pandas"],
    github: "https://github.com/PoojanJaviya/Simple-Chess-Pairing-Software",
    icon: Crown,
    accent: "from-amber-500/20 to-yellow-500/20",
  },
];

const Projects = () => {
  const { ref, isVisible } = useReveal();

  return (
    <section id="projects" className="py-28 px-6 relative">
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[400px] bg-primary/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div
        ref={ref}
        className={`container max-w-6xl mx-auto relative transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-14">
          <h2 className="section-heading">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subheading mt-3">
            Real-world applications I've designed, built, and shipped.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <article
              key={project.title}
              className="group relative gradient-card rounded-2xl border border-border/50 overflow-hidden transition-all duration-500 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/[0.06] hover:-translate-y-2 flex flex-col"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {/* Top accent bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${project.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="p-7 flex flex-col flex-grow">
                {/* Icon + Title */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300 shrink-0">
                    <project.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 font-heading leading-tight pt-0.5">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-grow">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-primary/8 text-primary/80 border border-primary/10 tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action button */}
                <div className="flex gap-3 pt-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] border border-border/50 text-sm font-medium text-foreground transition-all duration-300 hover:bg-white/[0.08] hover:border-primary/25 group/btn"
                  >
                    <Github className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                    View Code
                    <ExternalLink className="w-3 h-3 text-muted-foreground ml-1" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;