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
    {question: 'How can I contact you if I have additional questions?', answer: 'You can reach out to us via email at KD.Together@outlook.com'}
  ]

  constructor() {

  }

  ngOnInit(): void {

  }

}
