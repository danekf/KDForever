import { Component, OnInit } from '@angular/core';
import { timestamp } from 'rxjs';

//declare how an FAQ should be built
type UPDATE = Array<{update: string, timestamp: string}>;

@Component({
  selector: 'welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  updates: UPDATE =[

    {update: 'Itinerary added, discount code for reStays added to FAQ page.', timestamp: 'April 22nd 2022'},
    {update: 'RSVP page is now accessible!', timestamp: 'March 5th 2022'},
    {update: 'FAQ section added.', timestamp: 'Dec 15th 2022'},

  ]


  constructor() { }

  ngOnInit(): void {
  }

}
