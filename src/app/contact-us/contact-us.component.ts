import { Component, OnInit } from '@angular/core';

//declare how an FAQ should be built
type FAQ = Array<{question: string, answer: string}>;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  //create FAQs to be displayed using FAQ type declared above
  faqs: FAQ = [
    {question:'What is the date of the wedding?', answer:'The wedding is on September 2nd 2023'},
    {question: 'Where is the wedding being held?', answer:"The wedding is being held at Stanley's Olde Maple Lane Farm in Edwards Ontario. Further instructions for transportation will be provided closer to the event."},
    {question:'Are there any accomadations available?', answer:'We are currently looking into options for hotels within Ottawa that can provide a group deal for bookings. We will be providing more information early in 2023.'},
    {question:'Will transportation be provided?', answer:'We are currently looking into possible group transportation to/from a chosen hotel for the wedding. More information will be provided closer to the date.'},
    {question:'', answer:''},
    {question: 'How can I contact you if I have additional questions?', answer: 'You can reach out to us via email at KD.Together@outlook.com'}
  ]

  constructor() {

  }

  ngOnInit(): void {

  }

}
