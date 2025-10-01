import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useBookingStore } from "@/stores/booking-store";
import { useAuthStore } from "@/stores/auth-store";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openBookingModal = useBookingStore((state) => state.openModal);
  const { openAuthModal, isAuthenticated, logout, user } = useAuthStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "#login") {
      e.preventDefault();
      if (isAuthenticated) {
        logout();
      } else {
        openAuthModal();
      }
    }
    // For mobile menu, close it after click
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  const renderNavLinks = (isMobile = false) =>
    NAV_LINKS.map((link) => {
      if (link.label === "Login") {
        return (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleNavLinkClick(e, link.href)}
            className={cn(
              "font-medium hover:text-primary transition-colors",
              isMobile ? "text-lg" : ""
            )}
          >
            {isAuthenticated ? `Logout${user?.name ? ` (${user.name})` : ''}` : "Login"}
          </a>
        );
      }
      return (
        <a
          key={link.label}
          href={link.href}
          onClick={(e) => isMobile && handleNavLinkClick(e, link.href)}
          className={cn(
            "font-medium hover:text-primary transition-colors",
            isMobile ? "text-lg" : ""
          )}
        >
          {link.label}
        </a>
      );
    });

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-card/80 backdrop-blur-lg border-b" : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center">
              <img src="/logo.jpg" alt="TidyTrust Cleaners logo" className="h-12 w-auto" />
            </a>
            <nav className="hidden md:flex items-center space-x-8">
              {renderNavLinks()}
            </nav>
            <div className="hidden md:block">
              <Button
                onClick={openBookingModal}
                className="btn-gradient rounded-lg px-6"
              >
                Get a Free Quote
              </Button>
            </div>
            <div className="md:hidden">
              <Button onClick={toggleMenu} variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 md:hidden"
            onClick={toggleMenu}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-card p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-8">
                <a href="#" className="flex items-center">
                  <img src="/logo.jpg" alt="TidyTrust Cleaners logo" className="h-10 w-auto" />
                </a>
                <Button onClick={toggleMenu} variant="ghost" size="icon">
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col space-y-6">
                {renderNavLinks(true)}
                <Button
                  onClick={() => {
                    openBookingModal();
                    toggleMenu();
                  }}
                  className="btn-gradient rounded-lg py-3 text-lg mt-4"
                >
                  Get a Free Quote
                </Button>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};