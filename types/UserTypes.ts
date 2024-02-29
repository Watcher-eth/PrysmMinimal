export type User = {
  id: string;
  name: string;
  address: string;
  pfp: string;
  pointsBalance: number;
  streak: number;
  accuracy: number;
  friends: User[] | [];
  // A generic setter function type
  setState: (values: Partial<User>) => void;
  reset: () => void;
};
