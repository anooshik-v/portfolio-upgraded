import { Component, OnInit } from '@angular/core';
import { Work, WorkSection } from '../work';
import { DataService } from '../data.service';
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  standalone: false
})
export class WorkComponent implements OnInit {

  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.getSections();
  }

  sections: WorkSection[] = [];
  selectedIndex = 0;

  getSections(): void {
    this.sections = this.dataService.getWorkSections();
  }
  openLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
