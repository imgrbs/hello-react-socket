class EventService {

   constructor(eventRepository) {
      this.eventRepository = eventRepository;
   }

   create(event) {
      return this.eventRepository.create(event);
   }

   getAll() {
      return this.eventRepository.getAll();
   }

   getOne(id) {
      return this.eventRepository.getOne(id);
   }

   destroy() {
      return this.eventRepository.destroy();
   }

}

export default EventService;