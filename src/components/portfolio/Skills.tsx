import { Code, Database, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Backend",
    icon: Database,
    skills: ["Python", "FastAPI", "SQLAlchemy", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Data / ML",
    icon: Code,
    skills: ["NumPy", "Pandas", "Scikit-learn", "Linear Regression", "Logistic Regression"],
  },
  {
    title: "Tools",
    icon: Terminal,
    skills: ["Git", "GitHub", "Linux", "VS Code", "Docker"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="gradient-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground border border-border"
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