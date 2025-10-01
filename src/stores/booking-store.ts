import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
type UserDetails = {
  name: string;
  email: string;
  phone: string;
  address: string;
};
type BookingData = {
  service: string | null;
  date: Date | null;
  time: string | null;
  userDetails: UserDetails | null;
};
type BookingState = {
  isOpen: boolean;
  currentStep: number;
  isSuccess: boolean;
  bookingData: BookingData;
};
type BookingActions = {
  openModal: () => void;
  closeModal: () => void;
  reset: () => void;
  nextStep: () => void;
  prevStep: () => void;
  setService: (service: string) => void;
  setDateTime: (date: Date, time: string) => void;
  setUserDetails: (details: UserDetails) => void;
  confirmBooking: () => void;
};
const initialState: BookingState = {
  isOpen: false,
  currentStep: 1,
  isSuccess: false,
  bookingData: {
    service: null,
    date: null,
    time: null,
    userDetails: null,
  },
};
export const useBookingStore = create<BookingState & BookingActions>()(
  immer((set) => ({
    ...initialState,
    openModal: () => set((state) => {
      state.isOpen = true;
    }),
    closeModal: () => set(initialState),
    reset: () => set(initialState),
    nextStep: () => set((state) => {
      if (state.currentStep < 4) {
        state.currentStep += 1;
      }
    }),
    prevStep: () => set((state) => {
      if (state.currentStep > 1) {
        state.currentStep -= 1;
      }
    }),
    setService: (service) => set((state) => {
      state.bookingData.service = service;
      state.currentStep = 2;
    }),
    setDateTime: (date, time) => set((state) => {
      state.bookingData.date = date;
      state.bookingData.time = time;
      state.currentStep = 3;
    }),
    setUserDetails: (details) => set((state) => {
      state.bookingData.userDetails = details;
      state.currentStep = 4;
    }),
    confirmBooking: () => set((state) => {
      // In a real app, this would trigger an API call
      console.log("Booking Confirmed:", state.bookingData);
      state.isSuccess = true;
    }),
  }))
);