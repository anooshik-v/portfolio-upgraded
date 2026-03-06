import { animate, style, transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fadeAnimation, fadeUpAnimation } from '../animations';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    animations: [
        trigger('fade', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(-120px)' }),
                animate('1.5s ease-out')
            ])
        ]),
        trigger('fadeUp', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(320px)' }),
                animate('1.5s ease-out')
            ])
        ])
    ],
    standalone: false
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
