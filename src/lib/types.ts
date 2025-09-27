export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  category: string;
  image: string;
};

export type Club = {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  isVerified: boolean;
  isFeatured: boolean;
};
