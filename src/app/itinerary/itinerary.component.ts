import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.scss']
})
export class ItineraryComponent implements OnInit {

  mobileView: boolean = false;

  constructor() { }

  ngOnInit() {
    window.onresize = () => this.mobileView = window.innerWidth <= 991
  }

}
