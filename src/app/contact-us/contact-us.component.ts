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
    {question:'What is question #2?', answer:'This is question'}
  ]

  constructor() {

  }

  ngOnInit(): void {

  }

}
