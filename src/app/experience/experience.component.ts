import { Component, OnInit } from '@angular/core';
import { Place } from '../place';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent implements OnInit {

  selectedPlace?: Place;
 places: Place[]= [
  { id: 12, 
    name: 'Informatics Solution', 
    position:"Software Engineer",
    description:"I designed and developed Task Management web and mobile application for the internal staff. I was directly involved in architecting and implementing mobile and desktop applicatons for two clients in financial sector in Armenia. I greatly contributed in deployment and support, as well as adding features that the client requested after delivering. " , 
    place: "Yerevan, Armenia", 
    duration: "September 2016 - Present", 
    technologies:["Java", "Spring Boot", "Hibernate/JPA", "AngularJS", "MySQL", "Git"]
  },
  { id: 13, 
    name: 'American University of Armenia', 
    position:"Masters Student in Computer and Information Science",
    description:"Following my journey to study different aspects of comupter science. The courses were in English and I always made sure to select project based classes. Here I focused more on steps of a project, had courses with teachers that were part of successful startups or founded companies that were responsible for progressing the technology in Armenia." ,
     place: "Yerevan, Armenia", 
     duration: "2016 - 2018", 
     coursework:["Software Project Management","Object Oriented Analysis and Design", "Natural Language Processing", "Machine Learning", "Cryptography"]
   },
  { id: 14, 
    name: 'Shahid Beheshti University', 
    position: "Bachelor's Student in Software Engineering" ,
    description:"I have always known that I enjoyed creating programs and it was a no brainer to study software engineering at one of the top five universities in Iran. I enjoyed project based classes, made games and chatbots. I learned about compilers and how to write your own basic compiler. I began to understand programming on a deeper level.", 
    place: "Tehran, Iran", 
    duration: "2012 - 2016", 
    coursework:["NoSQL Databases","Computer Simulation", "Design Patterns", "Artiﬁcial Intelligence"]
  }
]; 
  constructor() { 
       }

  ngOnInit(): void {

   
  }
      ngAfterViewInit(): void{
      this.onSelect(this.places[0])
    }
  onSelect(hero: Place): void {
    this.selectedPlace = hero;
     var tablinks = document.getElementsByClassName("places");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
    
  }
 var evt= document.getElementById("place-"+hero.id);
 if(evt){
  evt.className += " active";
}
}
}

 