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
    {update: 'Mobile view is currently in the works, for now the website is best viewed on a display with a resolution equal or greater to 1280x720 (720p)', timestamp:'December 19th 2022'},
    {update: 'FAQ section added.', timestamp: 'Dec 15th 2022'},

  ]


  constructor() { }

  ngOnInit(): void {
  }

}
