"use client";

import { motion } from "framer-motion";

interface ProjectFeaturesProps {
  features: string[];
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut" as const,
    },
  },
};

export default function ProjectFeatures({ features }: ProjectFeaturesProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="flex flex-col gap-3"
    >
      {features.map((feature, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          className="flex items-start gap-3"
        >
          <span className="font-mono text-[9px] text-accent mt-0.5 shrink-0">
            {String(i + 1).padStart(2, "0")}
          </span>

          <span className="font-sans text-sm text-muted-foreground">
            {feature}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
