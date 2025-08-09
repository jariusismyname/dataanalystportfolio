import React from "react";
import { motion } from "framer-motion";

const FadeSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}        // Start invisible and slightly down
      whileInView={{ opacity: 1, y: 0 }}     // Fade in & slide up
      exit={{ opacity: 0, y: -50 }}          // Fade out & slide up when leaving
      transition={{ duration: 1.5, ease: "easeInOut" }} // Slow mo effect
      viewport={{ once: false, amount: 0.3 }} // Animate again when re-entered
    >
      {children}
    </motion.div>
  );
};

export default FadeSection;
