import { useState } from "react";
import { motion } from "framer-motion";
import { useBookingStore } from "@/stores/booking-store";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const availableTimes = [
  "09:00 AM", "10:00 AM", "11:00 AM",
  "01:00 PM", "02:00 PM", "03:00 PM",
];
export const Step2_DateTimeSelection = () => {
  const { prevStep, setDateTime } = useBookingStore();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const handleNext = () => {
    if (date && selectedTime) {
      setDateTime(date, selectedTime);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-brand-text">Choose Date & Time</h2>
      <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          disabled={(day) => day < new Date(new Date().setDate(new Date().getDate() - 1))}
        />
        <div className="w-full md:w-auto">
          <h3 className="font-semibold mb-4 text-center md:text-left">Available Times</h3>
          <div className="grid grid-cols-3 gap-2">
            {availableTimes.map((time) => (
              <Button
                key={time}
                variant={selectedTime === time ? "default" : "outline"}
                onClick={() => setSelectedTime(time)}
                className={cn(
                  "bg-white",
                  selectedTime === time && "bg-primary-blue text-white hover:bg-primary-blue/90"
                )}
              >
                {time}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 flex justify-between">
        <Button variant="outline" onClick={prevStep}>Back</Button>
        <Button
          onClick={handleNext}
          disabled={!date || !selectedTime}
          className="bg-primary-blue hover:bg-primary-blue/90"
        >
          Next
        </Button>
      </div>
    </motion.div>
  );
};