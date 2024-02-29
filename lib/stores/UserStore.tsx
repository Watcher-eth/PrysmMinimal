import { create } from "zustand";
import { User } from "@/types/UserTypes";

async function fetchInitialUserData() {
  // TODO: Fetch privy (userId)
  // TODO: Fetch DB (userId -> user)
  // TODO: SYNC MUD (userId -> activity friends/user)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: "John Doe",
        address: "123 Main St",
        // Add other necessary initial values
      });
    }, 1000); // Simulate delay
  });
}

const useUserStore = create<User>((set) => ({
  id: "",
  name: "",
  address: "",
  pfp: "",
  pointsBalance: 0,
  streak: 0,
  accuracy: 0,
  friends: [],
  // Store actions
  setState: (newState) => set((state) => ({ ...state, ...newState })),
  reset: () =>
    set(() => ({
      id: "",
      name: "",
      address: "",
      pfp: "",
      pointsBalance: 0,
      streak: 0,
      accuracy: 0,
      friends: [],
    })),
  // Self-invoking async function to automatically set initial state
  initialize: (() => {
    const fetchData = async () => {
      const initialData = await fetchInitialUserData();
      set(() => ({
        ...initialData,
      }));
    };
    fetchData();
    return undefined; // initialize doesn't need to return anything
  })(),
}));

export default useUserStore;
