import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const contactLinks = [
  {
    href: "mailto:poojanjaviya07@gmail.com",
    icon: Mail,
    label: "Email",
    detail: "poojanjaviya07@gmail.com",
    external: false,
  },
  {
    href: "https://github.com/PoojanJaviya",
    icon: Github,
    label: "GitHub",
    detail: "github.com/PoojanJaviya",
    external: true,
  },
  {
    href: "https://linkedin.com/in/poojan-javiya",
    icon: Linkedin,
    label: "LinkedIn",
    detail: "linkedin.com/in/poojan-javiya",
    external: true,
  },
];

const Contact = () => {
  const { ref, isVisible } = useReveal();

  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div
        ref={ref}
        className={`container max-w-3xl mx-auto text-center relative transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-14">
          <h2 className="section-heading">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="section-subheading mt-3">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="group gradient-card rounded-2xl p-6 border border-border/50 hover:border-primary/25 transition-all duration-400 hover:shadow-xl hover:shadow-primary/[0.04] hover:-translate-y-1 text-left"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                  <link.icon className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>
              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300 font-heading mb-1">
                {link.label}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {link.detail}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;