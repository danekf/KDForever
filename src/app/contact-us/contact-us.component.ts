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
    {question:'What is the date of the wedding?', answer:'The wedding is on September 2nd 2023 at 3:30PM. Please arrive 30 minutes before the ceremony begins.'},
    {question: 'Where is the wedding being held?', answer:"The wedding is being held at Stanley's Olde Maple Lane Farm in Edwards Ontario."},
    {question:'Are there any accomadations available?', answer:'We will unfortunately not be able to book rooms in hotels for guests. However we will have discount codes available for hotels in the downtown area of Ottawa by the end of March.'},
    {question:'Will transportation be provided?', answer:'We are currently looking into group transportation to/from reStays Hotel in Ottawa (101 Queen St). More information will be provided closer to the date.'},
    {question:'', answer:''},
    {question: 'How can I contact you if I have additional questions?', answer: 'You can reach out to us via email at KD.Together@outlook.com'}
  ]

  constructor() {

  }

  ngOnInit(): void {

  }

}
