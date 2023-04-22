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
    {question:'Are there any accomadations available?', answer:'We will unfortunately not be able to book rooms in hotels for guests. However we have a discount code for the reStays hotel in ottawa, where we will be staying. Use code Fillw. Book online or call 1-833-996-6200.'},
    {question:'Is parking available at the location?', answer:'Parking is available on site at the venue. Cars left at Venue must be recovered by 10AM the following day.'},
    {question:'Will transportation be provided?', answer:'We will have bus travel to/from reStays Hotel in Ottawa (101 Queen St). The most up to date times can be found on the itinerary.'},
    {question:'', answer:''},
    {question: 'How can I contact you if I have additional questions?', answer: 'You can reach out to us via email at KD.Together@outlook.com'}
  ]

  constructor() {

  }

  ngOnInit(): void {

  }

}
