import { Code, Database, Terminal, Cpu } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Python", "SQL"],
  },
  {
    title: "Backend & Web",
    icon: Database,
    skills: ["FastAPI", "Flask", "SQLAlchemy", "JWT Authentication"],
  },
  {
    title: "Machine Learning",
    icon: Cpu,
    skills: ["Pandas", "NumPy", "Scikit-learn"],
  },
  {
    title: "Tools",
    icon: Terminal,
    skills: ["Git", "GitHub", "Jupyter Notebook"],
  },
];

const Skills = () => {
  const { ref, isVisible } = useReveal();

  return (
    <section id="skills" className="py-28 px-6 relative">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-primary/[0.04] rounded-full blur-[100px] pointer-events-none" />

      <div
        ref={ref}
        className={`container max-w-6xl mx-auto relative transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-14">
          <h2 className="section-heading">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subheading mt-3">
            Technologies and tools I work with every day.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="group gradient-card rounded-2xl p-7 border border-border/50 hover:border-primary/25 transition-all duration-400 hover:shadow-xl hover:shadow-primary/[0.04] hover:-translate-y-1"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground font-heading">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/[0.04] text-muted-foreground border border-border/50 hover:text-foreground hover:border-primary/20 hover:bg-primary/5 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;