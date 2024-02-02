import { Component } from '@angular/core';
import{Firestore,collection,doc,setDoc} from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
tableled1:any;

  constructor(private db:Firestore) {}
async Encender(){
this.tableled1= doc(this.db,'controlLED','LED1');
await setDoc(this.tableled1, { encender: true });//para apagar
}
async Apagar(){
this.tableled1= doc(this.db,'controlLED','LED1');
await setDoc(this.tableled1, { encender: false });//para apagar
   }

  }

