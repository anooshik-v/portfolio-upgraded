import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Place } from '../place';
import { DataService } from '../data.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css'],
    animations: [
        trigger('curtain', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateX(300px)' }),
                animate('1s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
            ])
        ])
    ],
    standalone: false
})
export class ExperienceComponent implements OnInit, AfterViewInit {
  selectedPlace?: Place;
  places: Place[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getPlaces();
  }

  ngAfterViewInit(): void {
    if (this.places.length > 0) {
      this.onSelect(this.places[0]);
    }
  }

  getPlaces(): void {
    this.places = this.dataService.getPlaces();
  }

  onSelect(place: Place): void {
    if (this.selectedPlace !== place) {
      this.selectedPlace = undefined; // Temporarily unset to trigger the animation
      setTimeout(() => {
        this.selectedPlace = place;
      }, 0);
    }
  }
}
