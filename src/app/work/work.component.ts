import { Component, OnInit } from '@angular/core';
import { Work } from '../work';
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects: Work[]=[
  {
      name: "My Portfolio",
      description:"This website is made from scratch using the latest version of Angular and following recent UX principles.",
      year:"2022",
      link:"https://github.com/a-vrtn/portfolio-upgraded",
      demo:"https://a-vrtn.github.io/",
      technologies:[ "Angular", "Github Pages"]
  },  {
      name: "Wedding Bot and Admin Panel",
      description:"This is a short project I made.",
      year:"2021",
      technologies:["Java","Telegram API", "MySQL", "Angular", "Heroku Deployment"]
  },
  {
      name: "Customers and Shops Connecting Application ",
      description:"",
      year:"2021",
      technologies:["Java","Stripe Payment", "MySQL", "Angular", "Azure Deployment"]
  },
  {
      name: "Customers and Shops Connecting App ",
      description:"",
      year:"2021",
      technologies:["Java","Google Payments","Apple Payments", "MySQL", "Angular", "AWS Deployment"]
  },
  {
      name: "Youth Engagement App",
      description:"",
      year:"2021",
      technologies:["Java","Telegram API", "MySQL", "Angular", "Heroku Deployment"]
  },
  {
      name: "Barcode App",
      description:"",
      year:"2021",
      technologies:["Angular"]
  },
    {
      name: "Request and Task Management for Internal and External Requests",
      description:"",
      year:"2021",
      technologies:["Java","AngularJS", "VPS Setup and Tomcat Deployment"]
  },
    {
      name: "Bank Mobile Application and Admin Portal",
      description:"",
      year:"2018",
      technologies:["Java","Bootstrap"]
  }
  
  ]

}
