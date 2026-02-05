import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "FastAPI Authentication System",
    description: "A secure REST API with JWT-based authentication, user management, and role-based access control. Built with FastAPI and SQLAlchemy.",
    tech: ["Python", "FastAPI", "JWT", "SQLAlchemy", "PostgreSQL"],
    github: "#",
  },
  {
    title: "ML Prediction Pipeline",
    description: "End-to-end machine learning pipeline for data preprocessing, model training, and prediction. Includes linear and logistic regression models.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    github: "#",
  },
  {
    title: "Task Management API",
    description: "RESTful API for task management with CRUD operations, user authentication, and database persistence.",
    tech: ["Python", "FastAPI", "SQLAlchemy", "REST"],
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="gradient-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 flex flex-col group"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-medium text-sm transition-all hover:bg-secondary/80"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;