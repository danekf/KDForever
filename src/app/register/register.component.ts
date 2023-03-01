import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formData: any;

  constructor(private firestore: FirestoreService) {
  }

  ngOnInit(): void {
  }


}
