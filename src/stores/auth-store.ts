import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
type AuthState = {
  isAuthModalOpen: boolean;
  authView: 'login' | 'signup';
  isAuthenticated: boolean;
  user: { name: string } | null;
};
type AuthActions = {
  openAuthModal: () => void;
  closeAuthModal: () => void;
  setAuthView: (view: 'login' | 'signup') => void;
  login: (name: string) => void;
  logout: () => void;
};
const initialState: AuthState = {
  isAuthModalOpen: false,
  authView: 'login',
  isAuthenticated: false,
  user: null,
};
export const useAuthStore = create<AuthState & AuthActions>()(
  immer((set) => ({
    ...initialState,
    openAuthModal: () =>
      set((state) => {
        state.isAuthModalOpen = true;
        state.authView = 'login'; // Always default to login view on open
      }),
    closeAuthModal: () =>
      set((state) => {
        state.isAuthModalOpen = false;
      }),
    setAuthView: (view) =>
      set((state) => {
        state.authView = view;
      }),
    login: (name) =>
      set((state) => {
        state.isAuthenticated = true;
        state.user = { name };
        state.isAuthModalOpen = false;
      }),
    logout: () => set(initialState),
  }))
);