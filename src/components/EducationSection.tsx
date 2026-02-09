import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    period: "Current",
    grade: "CGPA: 7.4",
    icon: "🎓",
    current: true,
  },
  {
    degree: "Intermediate (PCM)",
    institution: "Shri Ramlata Devi Public School",
    location: "Agra, India",
    period: "Completed",
    grade: "80.1%",
    icon: "📚",
    current: false,
  },
  {
    degree: "Matriculation",
    institution: "St. Joseph Vaz Vidhyaniketan School",
    location: "Uttar Pradesh, India",
    period: "Completed",
    grade: "64.6%",
    icon: "📖",
    current: false,
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Academic journey and qualifications
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative pl-0 md:pl-16 pb-12 last:pb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 hidden md:flex">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${
                    edu.current 
                      ? 'bg-primary text-primary-foreground glow-effect' 
                      : 'bg-secondary text-foreground'
                  }`}>
                    {edu.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`glass-card p-6 ${edu.current ? 'border-primary/30 glow-soft' : ''}`}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.institution}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      edu.current 
                        ? 'bg-primary/20 text-primary' 
                        : 'bg-secondary text-muted-foreground'
                    }`}>
                      {edu.grade}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {edu.period}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
