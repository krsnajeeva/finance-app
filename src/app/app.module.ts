import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppLoginComponent } from 'src/login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLandingModule } from 'src/landing/landing.module';


@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppLandingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
