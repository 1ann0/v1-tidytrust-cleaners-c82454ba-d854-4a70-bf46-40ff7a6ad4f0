import { motion } from "framer-motion";
import { useBookingStore } from "@/stores/booking-store";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
export const Step4_Confirmation = () => {
  const { prevStep, confirmBooking, bookingData } = useBookingStore();
  const { service, date, time, userDetails } = bookingData;
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-brand-text">Confirm Your Booking</h2>
      <Card>
        <CardHeader>
          <CardTitle>Booking Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="font-semibold text-gray-600">Service:</p>
            <p className="text-brand-text">{service}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-600">Date & Time:</p>
            <p className="text-brand-text">
              {date ? format(date, "PPP") : "N/A"} at {time}
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-600">Personal Details:</p>
            <p className="text-brand-text">{userDetails?.name}</p>
            <p className="text-brand-text">{userDetails?.email}</p>
            <p className="text-brand-text">{userDetails?.phone}</p>
            <p className="text-brand-text">{userDetails?.address}</p>
          </div>
        </CardContent>
      </Card>
      <div className="mt-8 flex justify-between">
        <Button variant="outline" onClick={prevStep}>Back</Button>
        <Button onClick={confirmBooking} className="bg-primary-green hover:bg-primary-green/90">
          Confirm Booking
        </Button>
      </div>
    </motion.div>
  );
};