import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FiGithub,
      href: "https://github.com/Razgrizxx",
      label: "GitHub",
    },
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/christian-javier-rizzo/",
      label: "LinkedIn",
    },
    { icon: FiMail, href: "mailto:razgrisss41@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-gray-950 text-white section-padding border-t border-gray-800">
      <div className="container-width">
        <div className="text-center">
          {/* Logo/Name */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-4 text-primary-400"
          >
            Christian Rizzo
          </motion.h3>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-6 mb-8"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="border-t border-gray-900 pt-8"
          >
            <p className="text-gray-400">
              © {currentYear} Christian Rizzo. All rights reserved.
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Built with React, Tailwind CSS, and Framer Motion
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
