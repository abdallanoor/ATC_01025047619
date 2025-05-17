export interface Booking {
  id: string;
  eventId: string;
  userId: string;
  bookingDate: string;
  eventName: string;
  eventVenue: string;
  eventDate: string;
  ar: {
    eventName: string;
    eventVenue: string;
  };
}
