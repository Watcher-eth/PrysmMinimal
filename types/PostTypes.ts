type PostFeedType = { name: string; post: string; type: string; image: string };

type PostUploadState = {
  content: string;
  type: string;
  media: string;
  topic: string;
  // A generic setter function type
  setState: (values: Partial<PostUploadState>) => void;
  reset: () => void;
};
