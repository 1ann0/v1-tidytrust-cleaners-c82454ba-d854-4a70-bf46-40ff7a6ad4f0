import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useBookingStore } from "@/stores/booking-store";

export const Hero = () => {
  const openModal = useBookingStore((state) => state.openModal);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-brand-light/30 z-10" />
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1603712725038-92f751a02989?q=80&w=2070&auto=format&fit=crop"
          alt="Bright, clean and modern living room"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-20 text-brand-text px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-pretty"
        >
          Professional Cleaning Services
          <br />
          <span className="text-gradient">You Can Trust in Kenya</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-brand-text/80 mb-8"
        >
          Reliable, professional home and office cleaning services in Nairobi and across Kenya. Get your free, instant quote in 60 seconds.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={openModal}
            size="lg"
            className="btn-gradient rounded-lg px-10 py-7 text-lg font-semibold"
          >
            Get Your Free Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
};