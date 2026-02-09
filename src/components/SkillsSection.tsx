import { motion } from "framer-motion";
import { Lightbulb, Clock, ClipboardList, Users } from "lucide-react";

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const skillIcons: Record<string, { path: string; invert?: boolean }> = {
  "HTML": { path: "html5/html5-original" },
  "CSS": { path: "css3/css3-original" },
  "JavaScript": { path: "javascript/javascript-original" },
  "Java": { path: "java/java-original" },
  "C++": { path: "cplusplus/cplusplus-original" },
  "PHP": { path: "php/php-original" },
  "Express.js": { path: "express/express-original", invert: true },
  "Next.js": { path: "nextjs/nextjs-original", invert: true },
  "Bootstrap": { path: "bootstrap/bootstrap-original" },
  "React.js": { path: "react/react-original" },
  "Tailwind CSS": { path: "tailwindcss/tailwindcss-original" },
  "MongoDB": { path: "mongodb/mongodb-original" },
  "MySQL": { path: "mysql/mysql-original" },
  "Git": { path: "git/git-original" },
  "GitHub": { path: "github/github-original", invert: true },
  "Node.js": { path: "nodejs/nodejs-original" },
  "VS Code": { path: "vscode/vscode-original" },
  "Firebase": { path: "firebase/firebase-original" },
};

const softSkillIcons: Record<string, React.ElementType> = {
  "Problem Solving": Lightbulb,
  "Time Management": Clock,
  "Project Management": ClipboardList,
  "Team Player": Users,
};

const skillCategories = [
  {
    title: "Languages",
    skills: ["HTML", "CSS", "JavaScript", "Java", "C++", "PHP"],
    gradient: "from-emerald-500/15 to-teal-500/10",
    borderHover: "hover:border-emerald-400/50",
    dotColor: "bg-emerald-400",
  },
  {
    title: "Frameworks",
    skills: ["Express.js", "Next.js", "Bootstrap"],
    gradient: "from-violet-500/15 to-purple-500/10",
    borderHover: "hover:border-violet-400/50",
    dotColor: "bg-violet-400",
  },
  {
    title: "Libraries",
    skills: ["React.js", "Tailwind CSS"],
    gradient: "from-cyan-500/15 to-sky-500/10",
    borderHover: "hover:border-cyan-400/50",
    dotColor: "bg-cyan-400",
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL"],
    gradient: "from-amber-500/15 to-yellow-500/10",
    borderHover: "hover:border-amber-400/50",
    dotColor: "bg-amber-400",
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Node.js", "VS Code", "Firebase"],
    gradient: "from-rose-500/15 to-pink-500/10",
    borderHover: "hover:border-rose-400/50",
    dotColor: "bg-rose-400",
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Time Management", "Project Management", "Team Player"],
    gradient: "from-lime-500/15 to-green-500/10",
    borderHover: "hover:border-lime-400/50",
    dotColor: "bg-lime-400",
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className={`glass-card p-6 relative overflow-hidden group transition-all duration-500 ease-out hover:scale-[1.04] hover:-translate-y-2 hover:shadow-[0_16px_40px_hsl(var(--primary)/0.15),0_0_24px_hsl(var(--primary)/0.08)] ${category.borderHover}`}
            >
              {/* Unique gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${category.dotColor}`} />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => {
                    const iconData = skillIcons[skill];
                    const SoftIcon = softSkillIcons[skill];

                    return (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                        className="skill-badge flex items-center gap-2 cursor-default"
                      >
                        {iconData && (
                          <img
                            src={`${DEVICON_BASE}/${iconData.path}.svg`}
                            alt={skill}
                            className={`w-5 h-5 ${iconData.invert ? "icon-invert" : ""}`}
                            loading="lazy"
                          />
                        )}
                        {SoftIcon && <SoftIcon className="w-4 h-4 text-primary" />}
                        {skill}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
