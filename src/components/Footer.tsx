import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kunal Vijayvargiya. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="mailto:Kunalvj19@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail size={18} />
          </a>
          <a href="https://github.com/KunalVijayvargiya" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github size={18} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
