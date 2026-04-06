import { ArrowDown, Mail, FileText } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container-narrow text-center">
        <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4 animate-fade-in">
          Hello, I'm
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Kunal Vijayvargiya
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          BCA Student | Full-Stack Developer
        </p>
        <p className="text-muted-foreground max-w-lg mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          Passionate about building clean and user-friendly applications.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <ArrowDown size={16} />
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors"
          >
            <Mail size={16} />
            Contact Me
          </a>
          <a
            href="/Kunal_Vijayvargiya_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-muted-foreground text-sm font-medium hover:bg-secondary transition-colors"
          >
            <FileText size={16} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
