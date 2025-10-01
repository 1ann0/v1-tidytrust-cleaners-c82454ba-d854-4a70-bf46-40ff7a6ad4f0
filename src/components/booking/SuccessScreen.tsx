import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBookingStore } from "@/stores/booking-store";
export const SuccessScreen = () => {
  const closeModal = useBookingStore((state) => state.closeModal);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="flex flex-col items-center justify-center text-center p-8"
    >
      <CheckCircle className="h-20 w-20 text-primary-green mb-6" />
      <h2 className="text-2xl font-bold text-brand-text mb-2">Booking Confirmed!</h2>
      <p className="text-gray-600 mb-6 max-w-sm">
        Thank you for choosing TidyTrust Cleaners. We've received your booking and will send a confirmation email shortly.
      </p>
      <Button onClick={closeModal} className="bg-primary-blue hover:bg-primary-blue/90">
        Done
      </Button>
    </motion.div>
  );
};