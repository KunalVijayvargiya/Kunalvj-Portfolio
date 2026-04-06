import { GraduationCap } from "lucide-react";

const education = [
  {
    title: "Bachelor of Computer Application (BCA)",
    subtitle: "Pursuing",
    detail: "",
  },
  {
    title: "Senior Secondary (12th – RBSE Board)",
    subtitle: "2022–2023",
    detail: "79%",
  },
  {
    title: "Secondary (10th – RBSE Board)",
    subtitle: "2020–2021",
    detail: "88%",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-secondary/40">
      <div className="container-narrow">
        <h2 className="text-2xl font-bold text-foreground mb-2">Education</h2>
        <div className="w-12 h-1 bg-primary rounded-full mb-10" />

        <div className="relative pl-8 border-l-2 border-border space-y-8">
          {education.map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[calc(2rem+5px)] top-0 w-3 h-3 rounded-full bg-primary border-2 border-background" />
              <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.subtitle}
                {item.detail && <span className="ml-2 text-primary font-medium">• {item.detail}</span>}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
