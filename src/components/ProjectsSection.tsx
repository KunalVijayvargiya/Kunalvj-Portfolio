import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Smart Quiz System",
    description:
      "A full-stack MERN-based web application that allows users to register, login, attempt quizzes, and track their performance.",
    features: [
      "Secure user authentication",
      "Quiz attempt system",
      "Performance tracking",
      "Leaderboard functionality",
      "Responsive interface",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    live: "https://smart-quiz-system-zeta.vercel.app/",
    github: "https://github.com/KunalVijayvargiya/Smart-Quiz-System",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        <h2 className="text-2xl font-bold text-foreground mb-2">Projects</h2>
        <div className="w-12 h-1 bg-primary rounded-full mb-10" />

        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-xl border border-border bg-card p-6 md:p-8 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
                  Key Features
                </h4>
                <ul className="grid sm:grid-cols-2 gap-1">
                  {project.features.map((f) => (
                    <li key={f} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-accent text-accent-foreground text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={14} />
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
