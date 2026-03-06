import { Injectable } from '@angular/core';
import { Work, WorkSection } from './work';
import { Place } from './place';
import PlacesJson from '../assets/places.json';
import WorksJson from '../assets/works.json';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  works: WorkSection[] = WorksJson;
  places: Place[] = PlacesJson;
  constructor() { }
  getPlaces(): Place[] {
    return this.places;
  }


  getWorks(): Work[] {
    return this.works.flatMap(section => section.projects);
  }

  getWorkSections(): WorkSection[] {
    return this.works;
  }

}
