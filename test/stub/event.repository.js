let stubEvent = [];

class EventRepository {
   create(newEvent) {
      return stubEvent.push(newEvent);
   }
   getAll() {
      return stubEvent;
   }
   getOne(id) {
      return stubEvent.filter(event => event.id = id);
   }

   destroy() { 
      stubEvent = []
      return;
   }
}

export { EventRepository };