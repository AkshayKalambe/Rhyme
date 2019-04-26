import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import { AppComponent } from './app.component';

import { SignupComponent } from "./signup/SignupComponent";
import { LoginComponent } from './login/login.component';

import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './/app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';

import { NgxEditorModule } from 'ngx-editor';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

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
    SignupComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    MyblogsComponent,
    ProfileComponent,
    CreateComponent,
    PostComponent,
    ViewComponent,
    CommentsComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxEditorModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
