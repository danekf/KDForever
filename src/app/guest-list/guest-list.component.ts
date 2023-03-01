import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss']
})
export class GuestListComponent implements OnInit {

  confirmedGuests: any;

  constructor(private firestore: FirestoreService) {
  }

  ngOnInit(): void {
    //set confirmed guests on load, for testing
    this.firestore.getConfirmedGuests().subscribe(
      response => (this.confirmedGuests = response)
    );
  }

}
