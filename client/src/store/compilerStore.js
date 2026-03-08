import { create } from "zustand";

export const useCompilerStore = create((set) => ({
  code: "",
  language: "javascript",
  output: null,
  error: null,
  isMain: 0,

  setCode: (code) => set({ code }),

  setLanguage: (language) => set({ language }),

  setOutput: (output) => set({ output }),

  setError: (error) => set({ error }),

  setIsMain: (isMain) => set({ isMain }),
}));