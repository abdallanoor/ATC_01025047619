import { Event } from '../interfaces/event.interface';

export const EVENTS: Event[] = [
  {
    id: 'event-1',
    eventName: 'Cairo Tech Meetup',
    description:
      'A gathering of tech enthusiasts to discuss the latest in software and AI.',
    category: { ar: 'تكنولوجيا', en: 'Technology', id: '4' },
    date: '2025-06-20T18:00:00',
    venue: 'The Greek Campus, Downtown Cairo',
    price: 0,
    image:
      'https://cairo.technesummit.com/public/assets/images/event/slider_1670092995.jpg',
    ar: {
      eventName: 'ملتقى التقنية في القاهرة',
      description:
        'تجمع لمحبي التكنولوجيا لمناقشة أحدث التطورات في البرمجيات والذكاء الاصطناعي.',
      venue: 'الجامعة اليونانية، وسط البلد',
    },
  },
  {
    id: 'event-2',
    eventName: 'Alexandria Music Night',
    description: 'An open-air music concert featuring local Egyptian artists.',
    category: { ar: 'موسيقي', en: 'Music', id: '1' },
    date: '2025-07-05T20:30:00',
    venue: 'Bibliotheca Alexandrina Plaza',
    price: 100,
    image:
      'https://daralmaref.com/Media/News/2021/7/24/19_2021-637626865764987919-498.jpg',
    ar: {
      eventName: 'ليلة الموسيقى في إسكندرية',
      description: 'حفلة موسيقية في الهواء الطلق بمشاركة فنانين مصريين.',
      venue: 'ساحة مكتبة الإسكندرية',
    },
  },
];
