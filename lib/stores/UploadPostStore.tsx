import { create } from "zustand";

const usePostStore = create<PostUploadState>((set) => ({
  content: "",
  type: "",
  media: "",
  topic: "",
  setState: (newState) => set((state) => ({ ...state, ...newState })),
  reset: () => set(() => ({ content: "", type: "", media: "", topic: "" })),
}));

export default usePostStore;
