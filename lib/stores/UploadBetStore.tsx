import { BetUploadState } from "@/types/BetTypes";
import { create } from "zustand";

const useCreateBetStore = create<BetUploadState>((set) => ({
  question: "",
  title: "",
  icon: "",
  type: "",
  media: "",
  topic: "",
  options: [],
  setState: (newState) => set((state) => ({ ...state, ...newState })),
  reset: () =>
    set(() => ({ content: "", type: "", media: "", topic: "", options: [] })),
}));

export default useCreateBetStore;
