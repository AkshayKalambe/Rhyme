import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from "./signup/SignupComponent";

let config = {
  apiKey: "AIzaSyAv0vduDE1_cxy9R_-iMspiN57fwCtCGJk",
  authDomain: "rhyme-88f0f.firebaseapp.com",
  databaseURL: "https://rhyme-88f0f.firebaseio.com",
  projectId: "rhyme-88f0f",
  storageBucket: "rhyme-88f0f.appspot.com",
  messagingSenderId: "231702633362"
};
firebase.initializeApp(config);


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
