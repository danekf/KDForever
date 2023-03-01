import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MenuComponent } from './menu/menu.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DirectionsComponent } from './directions/directions.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';

//using the compat layer for firestore because the tutorial is old and i am... lazy. Can change later, but need to get it working for now.
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { GuestListComponent } from './guest-list/guest-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    MenuComponent,
    ContactUsComponent,
    DirectionsComponent,
    RegisterComponent,
    LoginComponent,
    GuestListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
