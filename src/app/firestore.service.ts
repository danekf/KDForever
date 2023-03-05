import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl , FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

//TUTORIAL - https://matcha.fyi/angular-firebase-crud/

  constructor( private firestore: AngularFirestore ) { }

  getConfirmedGuests(){
    //return all from Guests where the 'accepted' field == true, send all (snapshot changes sends all)
    return this.firestore.collection('Guests', ref => ref.where('accepted', '==', true)).snapshotChanges();
  }


  rsvpForm = new FormGroup({
    email: new FormControl(''),
    contactName: new FormControl(''),
    accepted: new FormControl(true),
    numOfGuests: new FormControl(''),
  })

  rsvp(data: any){

  }
}

