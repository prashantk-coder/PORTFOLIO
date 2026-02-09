import { motion } from "framer-motion";
import { Github, Dices, Film, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UtensilsCrossed } from "lucide-react";


const projects = [
  {
    icon: Dices,
    title: "Dice Game Simulation",
    description:
      "A web-based dice game where two players roll dice and instantly see the result. Features random number generation, dynamic DOM updates, and responsive design.",
    features: [
      "Random number generation",
      "Dynamic DOM updates",
      "Modular & responsive design",
    ],
    tech: ["HTML", "CSS", "JavaScript", "API"],
    githubUrl: "https://github.com/prashantk-coder/Dice-Game.git",
    color: "from-amber-500/20 to-yellow-500/20",
    borderColor: "hover:border-amber-500/50",
  },
  {
    icon: UtensilsCrossed,
    title: "Online Food Ordering Website",
    description:
      "A modern online food ordering platform that allows users to browse restaurants, view menus, and place orders seamlessly with secure authentication and real-time data handling.",
    features: [
       "User Authentication & Authorization",
       "Restaurant & Menu Management",
       "Cart, Order Placement & Checkout",
    ],
    tech: ["React.js", "JavaScript", "CSS", "Firebase", "TMDB API"],
    githubUrl: "https://github.com/prashantk-coder/ONLINE-FOOD-ORDERING.git",
    color: "from-red-500/20 to-rose-500/20",
    borderColor: "hover:border-red-500/50",
  },
  {
    icon: Leaf,
    title: "Green Living Tips Chatbot",
    description:
      "A chatbot providing sustainability and eco-friendly suggestions. Features a smooth chat UI with mobile responsiveness and modular architecture.",
    features: [
      "Smooth chat UI",
      "Mobile responsive",
      "Modular and scalable architecture",
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "Firebase"],
    githubUrl: "https://github.com/prashantk-coder/CHATBOT-GREENPLUS.git",
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "hover:border-emerald-500/50",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Real-world applications built with modern technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`project-card group relative overflow-hidden ${project.borderColor}`}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <project.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-secondary/50 text-muted-foreground code-font"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Button */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={14} />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
