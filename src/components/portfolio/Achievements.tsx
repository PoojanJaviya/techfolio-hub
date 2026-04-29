import { Award, Trophy, Star, Target } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const achievements = [
  {
    title: "Smart India Hackathon",
    description: "Participated in India's largest national hackathon in both 2024 and 2025 editions, tackling real-world problem statements from government ministries.",
    icon: Trophy,
    highlight: "2024 & 2025",
  },
  {
    title: "Smart Gujarat Hackathon",
    description: "Competed in the state-level hackathon, developing innovative solutions addressing Gujarat-specific challenges using technology.",
    icon: Award,
    highlight: "2025",
  },
  {
    title: "Top 10 Finalist – TGF 2.0 Tech Sprint",
    description: "Secured a Top 10 finish in a competitive 36-hour hackathon, demonstrating rapid prototyping and problem-solving under pressure.",
    icon: Star,
    highlight: "Top 10",
  },
  {
    title: "Shortlisted in SIH 2025",
    description: "Shortlisted for the Smart India Hackathon 2025 with an AI-based Crop Recommendation System that leverages machine learning for agricultural decision-making.",
    icon: Target,
    highlight: "AI Crop Recommender",
  },
];

const Achievements = () => {
  const { ref, isVisible } = useReveal();

  return (
    <section id="achievements" className="py-28 px-6 relative">
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[300px] bg-primary/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div
        ref={ref}
        className={`container max-w-5xl mx-auto relative transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-14">
          <h2 className="section-heading">
            Achievements & <span className="text-gradient">Recognition</span>
          </h2>
          <p className="section-subheading mt-3">
            Hackathon wins and milestones along the way.
          </p>
        </div>

        {/* Timeline layout */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border/50 md:-translate-x-px" />

          <div className="space-y-8">
            {achievements.map((achievement, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div
                  key={achievement.title}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary/60 border-2 border-background -translate-x-1.5 mt-7 z-10 shadow-lg shadow-primary/20" />

                  {/* Spacer for mobile */}
                  <div className="w-12 shrink-0 md:hidden" />

                  {/* Card */}
                  <div className={`md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-0" : "md:pl-0"}`}>
                    <div className="group gradient-card rounded-2xl p-6 border border-border/50 hover:border-primary/20 transition-all duration-400 hover:shadow-xl hover:shadow-primary/[0.04] hover:-translate-y-1">
                      <div className="flex items-start gap-4">
                        <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300 shrink-0">
                          <achievement.icon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                            <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300 font-heading leading-tight">
                              {achievement.title}
                            </h3>
                            <span className="px-2.5 py-0.5 text-[10px] font-semibold rounded-full bg-primary/10 text-primary border border-primary/15 uppercase tracking-wider whitespace-nowrap">
                              {achievement.highlight}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Invisible spacer for the other side */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
