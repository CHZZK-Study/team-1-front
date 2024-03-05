import { create } from 'zustand';

const useAuthStore = create((set) => ({
  authForm: { email: '', password: '', nickname: '' },
  setAuthForm: (authForm) => set(authForm),
}));

export default useAuthStore;
