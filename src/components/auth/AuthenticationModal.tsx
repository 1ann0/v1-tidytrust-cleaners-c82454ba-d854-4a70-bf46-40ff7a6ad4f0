import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useAuthStore } from '@/stores/auth-store';
import { AnimatePresence } from 'framer-motion';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';
export const AuthenticationModal = () => {
  const { isAuthModalOpen, closeAuthModal, authView } = useAuthStore();
  const titles = {
    login: {
      title: 'Welcome Back!',
      description: 'Sign in to continue to TidyTrust.',
    },
    signup: {
      title: 'Create an Account',
      description: 'Join TidyTrust for a sparkling clean home.',
    },
  };
  return (
    <Dialog open={isAuthModalOpen} onOpenChange={closeAuthModal}>
      <DialogContent className="sm:max-w-md p-8">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold text-brand-text">{titles[authView].title}</DialogTitle>
          <DialogDescription>{titles[authView].description}</DialogDescription>
        </DialogHeader>
        <div className="mt-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {authView === 'login' ? <LoginForm key="login" /> : <SignupForm key="signup" />}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
};