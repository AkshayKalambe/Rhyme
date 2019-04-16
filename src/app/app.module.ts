import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import * as firebase from "firebase/app";
import "firebase/auth";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SignupComponent } from "./signup/SignupComponent";
import { LoginComponent } from "./login/login.component";
import { MenuComponent } from "./menu/menu.component";
import { HomeComponent } from "./home/home.component";
import { MyblogsComponent } from "./myblogs/myblogs.component";
import { ProfileComponent } from "./profile/profile.component";
import { CreateComponent } from "./create/create.component";

import { NgxEditorModule } from "ngx-editor";
import { HttpClientModule } from "@angular/common/http";
import { ToastrModule } from "ngx-toastr";
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentComponent } from './comment/comment.component';

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
    MenuComponent,
    HomeComponent,
    MyblogsComponent,
    ProfileComponent,
    CreateComponent,
    PostComponent,
    ViewComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxEditorModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: "toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
