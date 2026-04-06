import { Award } from "lucide-react";

const certs = [
  "Basics of Python Programming",
  "Introduction to Web Development",
  "Fundamentals of Computer Applications",
  "SQL(Intermediate)", 
  "Software Engineer Intern", 
  "CSS (Basics)",
];

const CertificationsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <h2 className="text-2xl font-bold text-foreground mb-2">Certifications</h2>
        <div className="w-12 h-1 bg-primary rounded-full mb-10" />

        <div className="grid sm:grid-cols-3 gap-4">
          {certs.map((cert) => (
            <div
              key={cert}
              className="flex items-start gap-3 p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
            >
              <Award size={20} className="text-primary shrink-0 mt-0.5" />
              <p className="text-sm font-medium text-card-foreground">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
