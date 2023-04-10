import { motion } from 'framer-motion';

export const DetailHeading = () => (
  <motion.h1
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    }}
    style={{ lineHeight: 2 }}
  >
    Here's some detailed stats about this home
  </motion.h1>
);
