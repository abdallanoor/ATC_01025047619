export interface Event {
  id: number;
  eventName: string;
  description: string;
  category: string;
  date: string;
  venue: string;
  price: number;
  image: string;
  ar: {
    eventName: string;
    description: string;
    category: string;
    venue: string;
  };
}
