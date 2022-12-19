import { Component, OnInit } from '@angular/core';

//declare how an FAQ should be built
type UPDATE = Array<{update: string, timestamp: string}>;

@Component({
  selector: 'welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  updates: UPDATE =[
    {update: 'FAQ section added with setup questions', timestamp: 'Dec 19th 2022'},

  ]


  constructor() { }

  ngOnInit(): void {
  }

}
