export type CardType = {
  name: string;
  description: string;
  topic: string;
  image: string;
  icon: string;
  optionA: { multiplier: number; name: string };
  optionB: { multiplier: number; name: string };
};

export type BetType = {
  name: string;
  description: string;
  topic: string;
  image: string;
  icon: string;
  id: string;
};
