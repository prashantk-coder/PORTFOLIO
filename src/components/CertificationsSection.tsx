import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Computational Theory",
    issuer: "Infosys",
    icon: "🧮",
  },
  {
    title: "Java Programming",
    issuer: "Cipher School",
    icon: "☕",
  },
  {
    title: "Code-a-thon Hackathon",
    issuer: "LPU",
    icon: "🏆",
  },
  {
    title: "Software Engineering",
    issuer: "Coursera",
    icon: "⚙️",
  },
  {
    title: "Personality Development",
    issuer: "Infosys",
    icon: "🎯",
  },
  {
    title: "Responsive Web Design",
    issuer: "FreeCodeCamp",
    icon: "📱",
  },
];

const achievements = [
  {
    title: "100+ LeetCode Problems",
    description: "Solved with 50 & 100-day streaks",
    icon: "🔥",
  },
  {
    title: "3★ in Java & C++",
    description: "HackerRank Certification",
    icon: "⭐",
  },
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative">
      {/* Background Accent */}
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
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-5 flex items-center gap-4 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl shrink-0">
                {cert.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground truncate">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
              <Award className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold text-foreground mb-2">Achievements</h3>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 flex items-center gap-4 min-w-[280px] max-w-[350px] glow-soft"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center text-3xl">
                {achievement.icon}
              </div>
              <div>
                <h4 className="font-bold text-foreground">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
