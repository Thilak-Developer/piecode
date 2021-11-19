import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AppComponent } from './app.component';
import { FirebaseService } from './services/firebase.service';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBHqmnNlBWOjMLJjdSbmFwyD8H8IBjmgBk",
      authDomain: "piecode-43cba.firebaseapp.com",
      databaseURL: "https://piecode-43cba-default-rtdb.firebaseio.com",
      projectId: "piecode-43cba",
      storageBucket: "piecode-43cba.appspot.com",
      messagingSenderId: "555706631709",
      appId: "1:555706631709:web:771ddc3c30e51bf019a8f4"
    }),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }




// apiKey: "AIzaSyBHqmnNlBWOjMLJjdSbmFwyD8H8IBjmgBk",
// authDomain: "piecode-43cba.firebaseapp.com",
// projectId: "piecode-43cba",
// storageBucket: "piecode-43cba.appspot.com",
// messagingSenderId: "555706631709",
// appId: "1:555706631709:web:771ddc3c30e51bf019a8f4"