import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  FAQ: string[];

  constructor() {
    this.FAQ = [
      'What is the date of the wedding? - The wedding is on September 2nd 2023',
      'string array #2'
    ]
  }

  ngOnInit(): void {
  }

}
