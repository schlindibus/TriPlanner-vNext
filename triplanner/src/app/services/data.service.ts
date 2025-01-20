import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, getDocs, query } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public firestore: Firestore) { }

  async createRWorkout(name: string, type: string, duration: string) {
    const docRef = await addDoc(collection(this.firestore, 'workouts'), {
      name: name,
      type: type,
      duration: duration
    });
    console.log("Document written with ID: ", docRef.id);
  }
  
}
