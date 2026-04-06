const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "C", "C++", "JavaScript"],
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "React.js", "Tailwind CSS"],
  },
  {
    title: "Backend Technologies",
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Database",
    skills: ["SQL", "MongoDB"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "MongoDB Compass", "Postman", "MS Word", "MS Excel", "MS PowerPoint"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/40">
      <div className="container-narrow">
        <h2 className="text-2xl font-bold text-foreground mb-2">Skills</h2>
        <div className="w-12 h-1 bg-primary rounded-full mb-10" />

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md bg-background border border-border text-sm text-foreground hover:border-primary/40 transition-colors"
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

export default SkillsSection;
