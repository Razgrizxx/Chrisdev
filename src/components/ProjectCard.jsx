import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.a
      href={project.liveUrl}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 hover:border-primary-500 transition-colors select-none cursor-pointer"
    >
      {/* Project Image */}
      <div className="h-56 bg-gray-700 flex items-center justify-center text-gray-400">
        <img
          src={project.image}
          alt={project.title}
          className="object-contain"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary-900/50 text-primary-300 rounded-full text-sm font-medium border border-primary-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        {/*  <div className="flex gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors duration-300"
          >
            <FiGithub size={18} />
            <span className="font-medium">Code</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors duration-300"
          >
            <FiExternalLink size={18} />
            <span className="font-medium">Live Demo</span>
          </motion.a>
        </div> */}
      </div>
    </motion.a>
  );
};

export default ProjectCard;
