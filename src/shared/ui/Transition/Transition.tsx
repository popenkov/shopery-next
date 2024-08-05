'use client';

import { motion } from 'framer-motion';

export default function Transition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}
