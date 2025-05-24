import { create } from "zustand";
import { persist } from "zustand/middleware"; // ✅ This line is required

const useAccountStore = create(
  persist(
    (set) => ({
      token: null,
      setToken: (token) => set({ token }),
      logout: () => set({ token: null }),
    }),
    {
      name: "account-storage",
    }
  )
);

export default useAccountStore;
