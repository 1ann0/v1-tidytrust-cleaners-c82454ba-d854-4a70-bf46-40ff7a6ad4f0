import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";
import { useBookingStore } from "@/stores/booking-store";
import { Card } from "@/components/ui/card";
export const Step1_ServiceSelection = () => {
  const setService = useBookingStore((state) => state.setService);
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-brand-text">Select a Service</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {SERVICES.map((service) => (
          <motion.div
            key={service.title}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card
              onClick={() => setService(service.title)}
              className="p-4 flex flex-col items-center justify-center text-center cursor-pointer h-full hover:bg-primary-blue/10 hover:border-primary-blue transition-all"
            >
              <div className="mb-2">
                <service.icon className="h-8 w-8 text-primary-blue" />
              </div>
              <p className="font-semibold text-sm text-brand-text">{service.title}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};