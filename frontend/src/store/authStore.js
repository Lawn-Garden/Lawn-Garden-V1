import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// export const useAuthStore = create((set) => ({
//   accessToken: null,
//   setAccessToken: (token) => set({ accessToken: token }),
//   clearAccessToken: () => set({ accessToken: null }),
// }));

export const useAuthStore = create(
  persist(
    (set) => ({
      accessToken: null,
      setAccessToken: (token) => set({ accessToken: token }),
      clearAccessToken: () => set({ accessToken: null }),
    }),
    {
      name: 'auth-storage', // localStorage key
      getStorage: () => localStorage, // 기본은 localStorage
    }
  )
);