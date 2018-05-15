import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventListResolverService implements Resolve<any>{
  resolve(route: ActivatedRouteSnapshot) {
    //The resolve() method subscribe for the getEvents() hence we are not calling the subscribe()
    return this.eventService.getEvents();
  }

  constructor( private eventService : EventService) { }

}
