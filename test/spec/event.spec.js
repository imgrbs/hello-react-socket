const chai = require('chai');
const should = chai.should();

const { EventService } = require('../../server/ServiceProvider');
const { EventRepository } = require('../stub/event.repository');

describe('Event Testsuite', () => {
   let eventService
   let newEvent

   beforeEach (() => {
      eventService = new EventService(new EventRepository());
      newEvent  = {
         'id': 1,
         'eventName': 'Hello React'
      };
   })
   afterEach (() => {
      eventService.destroy();
   })

   it('should create and return event correctly', () => {
      eventService.create(newEvent);
      const [ event ] = eventService.getOne(1);
      const result = event.should.be.an('object');
      result.have.property('id').equal(1)
      result.have.property('eventName').equal('Hello React');
      return ;
   });

});