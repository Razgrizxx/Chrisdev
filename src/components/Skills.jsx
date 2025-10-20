import { motion } from "framer-motion";
import { skills } from "../utils/skills";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const SkillItem = ({ skill, index }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.1, y: -5 }}
      className="flex flex-col items-center gap-3 p-4 bg-slate-800 rounded-lg border border-gray-700 hover:border-primary-500 transition-all duration-300"
    >
      <div className="w-16 h-16 flex items-center justify-center">
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-full h-full object-contain"
        />
      </div>
      <span className="text-gray-300 font-medium text-center text-sm">
        {skill.name}
      </span>
    </motion.div>
  );

  const SkillCategory = ({ title, skillList, delay = 0 }) => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-slate-900 rounded-lg shadow-lg p-6 border border-gray-700"
    >
      <h3 className="text-2xl font-bold text-white mb-6 text-center">
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skillList.map((skill, index) => (
          <SkillItem key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="section-padding bg-slate-800">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </motion.div>

        <div className="space-y-8">
          <SkillCategory
            title="Frontend Development"
            skillList={skills.frontend}
            delay={0.1}
          />
          <SkillCategory
            title="Backend Development"
            skillList={skills.backend}
            delay={0.2}
          />
          <SkillCategory
            title="Tools & Others"
            skillList={skills.tools}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
