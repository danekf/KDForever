import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

//TUTORIAL - https://matcha.fyi/angular-firebase-crud/

  constructor( private firestore: AngularFirestore ) { }

  getConfirmedGuests(){
    //not sure if snapshotChanges is necessary or how it works yet, but tut says it will give all values in collection
    return this.firestore.collection('Guests').snapshotChanges();
  }

  rsvp(data: any){

  }
}

