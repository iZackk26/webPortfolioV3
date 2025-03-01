import { motion } from "framer-motion";
import PropTypes from 'prop-types';

export default function Card({ image, title, description, navigateTo, tags }) {
  return (
    <motion.div
      className="w-full max-w-xs min-w-[16rem] bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-lg overflow-hidden relative"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <a href={`/${navigateTo}`} className="relative group">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition duration-300 filter brightness-100"
          whileHover={{ scale: 1.05 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 group-hover:opacity-70 transition duration-300"></div>
      </a>
      <div className="p-4 relative z-10 flex flex-col h-full">
        <a href={`/${navigateTo}`}>
          <motion.h2
            className="text-lg font-bold text-white"
            animate={{ y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h2>
        </a>
        <motion.p
          className="text-gray-400 line-clamp-3"
          animate={{ y: 0 }}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-2 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              className="px-2 text-xs font-semibold text-white bg-gray-700 rounded-full"
              whileHover={{ scale: 1.05, backgroundColor: "#4A5568" }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
        <div className="flex justify-start mt-8">
          <a
            href={`/${navigateTo}`}
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-300 rounded-lg group bg-gradient-to-br from-[#614385] to-[#516395] group-hover:from-[#614385] group-hover:to-[#516395] hover:text-white focus:ring-4 focus:outline-none focus:ring-[#614385]/50 hover:shadow-lg"
          >
            <span className="relative px-3 py-1.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Read More
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  navigateTo: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
