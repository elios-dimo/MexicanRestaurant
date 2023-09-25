import React from 'react';
import { motion } from 'framer-motion';

const animations = {
  initial: { opacity: 0, x: 100, transition: { duration: 0.2 } }, // Adjust the duration as needed
  animate: { opacity: 1, x: 0, transition: { duration: 0.3 } }, // Adjust the duration as needed
  exit: { opacity: 0, x: -100, transition: { duration: 0.2 } }, // Adjust the duration as needed
};

export const AnimatePages = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      {children}
    </motion.div>
  );
};
