import { create } from 'zustand';

const useAuthStore = create((set) => ({
  isLogIn: false,
  setIsLogIn: (isLogIn) => set({ isLogIn: !isLogIn.isLogIn }),
  isSignUp: true,
  setIsSignUp: (isSignUp) => set({ isSignUp: !isSignUp.isSignUp }),
  isEmailAuth: false,
  setIsEmailAuth: (isEmailAuth) =>
    set({ isEmailAuth: !isEmailAuth.isEmailAuth }),
}));

export default useAuthStore;
