import { motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import { scrollToTop } from "../utils/handleScroll";

const GoToTheTop = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-primary-600 text-white w-12 h-12 rounded-full shadow-lg hover:bg-primary-700 transition-colors duration-300 z-40 flex items-center justify-center border-2 border-primary-500"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
    >
      <FiArrowUp size={20} />
    </motion.button>
  );
};

export default GoToTheTop;
