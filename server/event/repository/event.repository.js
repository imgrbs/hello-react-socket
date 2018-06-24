
import Event from '../model/Event';

class EventRepository {
   constructor() {}

   create(newEvent) {
      return Event.push(newEvent);
   }
   getAll() {
      return Event;
   }
   getOne(id) {
      return Event.filter(event => event.id = id);
   }
}

export { EventRepository };