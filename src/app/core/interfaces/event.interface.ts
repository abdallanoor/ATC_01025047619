import { Category } from './category.interface';

export interface Event {
  id: string;
  eventName: string;
  description: string;
  category: Category;
  date: string;
  venue: string;
  price: number;
  image: string;
  ar: {
    eventName: string;
    description: string;
    venue: string;
  };
}
