import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { useBookingStore } from "@/stores/booking-store";
import { Step1_ServiceSelection } from "./Step1_ServiceSelection";
import { Step2_DateTimeSelection } from "./Step2_DateTimeSelection";
import { Step3_YourDetails } from "./Step3_YourDetails";
import { Step4_Confirmation } from "./Step4_Confirmation";
import { SuccessScreen } from "./SuccessScreen";
import { AnimatePresence } from "framer-motion";
const stepComponents: { [key: number]: React.ComponentType } = {
  1: Step1_ServiceSelection,
  2: Step2_DateTimeSelection,
  3: Step3_YourDetails,
  4: Step4_Confirmation,
};
export const BookingModal = () => {
  const { isOpen, closeModal, currentStep, isSuccess } = useBookingStore();
  const CurrentStepComponent = stepComponents[currentStep];
  const progressValue = isSuccess ? 100 : (currentStep / 4) * 100;
  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="sm:max-w-[650px] p-8">
        {isSuccess ? (
          <SuccessScreen />
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-center text-2xl font-bold text-brand-text">
                Get a Free Quote
              </DialogTitle>
              <div className="pt-4">
                <Progress value={progressValue} className="w-full" />
                <p className="text-center text-sm text-gray-500 mt-2">
                  Step {currentStep} of 4
                </p>
              </div>
            </DialogHeader>
            <div className="mt-6 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <CurrentStepComponent key={currentStep} />
              </AnimatePresence>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};