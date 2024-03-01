import { BetUploadState } from "@/types/BetTypes";
import { create } from "zustand";

const useCreateBetStore = create<BetUploadState>((set) => ({
  question: "",
  title: "",
  icon: "",
  type: "",
  media: "",
  topic: "",
  setState: (newState) => set((state) => ({ ...state, ...newState })),
  reset: () => set(() => ({ content: "", type: "", media: "", topic: "" })),
}));

export default useCreateBetStore;
