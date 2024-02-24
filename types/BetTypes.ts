export type BetUploadState = {
  question: string;
  title: string;
  icon: string;
  type: string;
  media: string;
  topic: string;
  // A generic setter function type
  setState: (values: Partial<BetUploadState>) => void;
  reset: () => void;
};
