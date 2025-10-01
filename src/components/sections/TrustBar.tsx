import { motion } from "framer-motion";
import { TRUST_SIGNALS } from "@/lib/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const TrustBar = () => {
  return (
    <section className="bg-muted py-12">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {TRUST_SIGNALS.map((signal, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              variants={itemVariants}
            >
              <signal.icon className="h-10 w-10 text-primary mb-3" />
              <p className="text-lg font-semibold text-muted-foreground">
                {signal.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};