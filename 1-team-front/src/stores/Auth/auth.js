import { create } from 'zustand';

const useAuthStore = create((set) => ({
  isLogIn: false,
  setIsLogIn: (isLogIn) => set({ isLogIn }),
  isSignUp: true,
  setIsSignUp: (isSignUp) => set({ isSignUp }),
  isEmailAuth: false,
  setIsEmailAuth: (isEmailAuth) => set({ isEmailAuth }),
  authForm: { email: '', password: '', nickname: '' },
  setAuthForm: (authForm) => set(authForm),
}));

export default useAuthStore;
