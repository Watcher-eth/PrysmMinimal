import { BetUploadState, BetVotingState } from "@/types/BetTypes";
import { create } from "zustand";

const useVotingStore = create<BetVotingState>((set) => ({
  question: "",
  title: "",
  betId: "",
  amount: 0,
  option: 0,

  setState: (newState) => set((state) => ({ ...state, ...newState })),
  reset: () =>
    set(() => ({ question: "", title: "", betId: "", amount: 0, option: 0 })),
}));

export default useVotingStore;
