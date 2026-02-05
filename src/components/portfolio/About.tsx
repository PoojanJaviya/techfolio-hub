const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-gradient">Me</span>
        </h2>
        
        <div className="gradient-card rounded-2xl p-8 md:p-12 border border-border">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a <span className="text-foreground font-medium">Computer Science student</span> with a strong passion for 
            building robust, scalable backend systems. My primary focus lies in <span className="text-foreground font-medium">backend development</span> and{" "}
            <span className="text-foreground font-medium">machine learning</span>, where I enjoy solving complex problems 
            and creating efficient solutions.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I have hands-on experience with <span className="text-foreground font-medium">Python</span>,{" "}
            <span className="text-foreground font-medium">FastAPI</span>, and{" "}
            <span className="text-foreground font-medium">SQLAlchemy</span>, building RESTful APIs and database-driven 
            applications. I'm particularly interested in cloud computing and designing systems that can scale.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
            and continuously learning to improve my craft.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;