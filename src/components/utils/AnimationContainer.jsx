import React from "react";
import { motion } from "framer-motion";

export const AnimationContainer = ({ children, customClassName, customDelay = 0.3 }) => {
  return (
    <motion.div
      className={customClassName}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: customDelay }}
    >
      {children}
    </motion.div>
  );
};
