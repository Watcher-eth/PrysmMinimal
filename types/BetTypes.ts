export type BetUploadState = {
  question: string;
  title: string;
  icon: string;
  type: string;
  media: string;
  topic: string;
  options: string[];
  // A generic setter function type
  setState: (values: Partial<BetUploadState>) => void;
  reset: () => void;
};

export type BetVotingState = {
  question: string;
  title: string;
  betId: string;
  amount: number;
  option: number;
  // A generic setter function type
  setState: (values: Partial<BetVotingState>) => void;
  reset: () => void;
};

export type BetModalProps = {
  image: string;
  betId: string;
  question: string;
  title: string;
  options: string[];
  totalPot: number;
};

export interface VotingScreenProps {
  changeStep: (step: number) => void;
  image: string;
  question: string;
  totalPot: number;
  title: string;
  options: string[];
}

export interface BetModalConfirmationScreenProps {
  image: string;
  options: string[];
  question: string;
  changeStep: (step: number) => void;
  multiplier: number;
}
