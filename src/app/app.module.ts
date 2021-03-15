import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './share/material.module';
import {ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from "./component/login/login.component";
import { RegistrationformComponent } from './component/registrationform/registrationform.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { PasswordresetComponent } from './component/passwordreset/passwordreset.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationformComponent,
    PasswordresetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
