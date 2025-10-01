import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/layout/Footer";
import { BookingModal } from "@/components/booking/BookingModal";
import { AuthenticationModal } from "@/components/auth/AuthenticationModal";
import { ThemeToggle } from "@/components/ThemeToggle";

export function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <HowItWorks />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
      <BookingModal />
      <AuthenticationModal />
      <div className="fixed bottom-4 right-4">
        <ThemeToggle />
      </div>
    </div>
  );
}