import { Lightbulb, Zap, Users, MessageSquare, Clock } from "lucide-react";

const softSkills = [
  { icon: Lightbulb, label: "Problem Solving" },
  { icon: Zap, label: "Quick Learner" },
  { icon: Users, label: "Teamwork" },
  { icon: MessageSquare, label: "Communication" },
  { icon: Clock, label: "Time Management" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-narrow">
        <h2 className="text-2xl font-bold text-foreground mb-2">About Me</h2>
        <div className="w-12 h-1 bg-primary rounded-full mb-8" />

        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-10">
          I am a BCA student with strong fundamentals in programming and web technologies. 
          Passionate about full-stack web development, I enjoy solving complex problems and 
          building applications that make a difference. I am constantly learning new technologies 
          and applying them in real-world projects to sharpen my development skills.
        </p>

        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
          Soft Skills
        </h3>
        <div className="flex flex-wrap gap-3">
          {softSkills.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm"
            >
              <Icon size={16} className="text-primary" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
