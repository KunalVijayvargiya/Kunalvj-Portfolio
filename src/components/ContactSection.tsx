import { useState } from "react";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import emailjs from '@emailjs/browser';

const contactInfo = [
  { icon: Mail, label: "Kunalvj19@gmail.com", href: "mailto:Kunalvj19@gmail.com" },
  { icon: Phone, label: "+91 8302009282", href: "#" },
  { icon: Github, label: "GitHub", href: "https://github.com/KunalVijayvargiya" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/kunal-vijayvargiya-34497233b/" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    alert("Message sent successfully 🚀");
    setForm({ name: "", email: "", message: "" });

  } catch (error) {
    console.error(error);
    alert("Failed to send message ❌");
  }
};
  return (
    <section id="contact" className="section-padding bg-secondary/40">
      <div className="container-narrow">
        <h2 className="text-2xl font-bold text-foreground mb-2">Contact</h2>
        <div className="w-12 h-1 bg-primary rounded-full mb-10" />

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-muted-foreground mb-6">
              Feel free to reach out for collaboration, opportunities, or just a friendly hello.
            </p>
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon size={18} className="text-primary" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Send size={16} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
