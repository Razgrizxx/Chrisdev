import { motion } from "framer-motion";

const AboutMe = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section id="about" className="section-padding bg-slate-900">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <motion.div {...fadeInUp} className="order-2 lg:order-1">
            <div className="w-full  bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 text-xl border-2 border-gray-700">
              <img
                className="rounded-lg"
                src="/hero/profile.png"
                alt="laptop"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="order-1 lg:order-2 space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Hi, I'm a passionate developer
            </h3>

            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a full-stack developer with a passion for creating
                beautiful, functional, and user-friendly applications. With
                experience in modern web technologies, I enjoy bringing ideas to
                life through code.
              </p>

              <p>
                My journey in web development started several years ago, and
                I've been constantly learning and adapting to new technologies.
                I believe in writing clean, maintainable code and creating
                seamless user experiences.
              </p>

              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="pt-4 w-fit"
            >
              <a
                href="https://drive.google.com/uc?export=download&id=1N3-yKox_nYXXRzTA1DRYIUdS2uUS4bNe"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
