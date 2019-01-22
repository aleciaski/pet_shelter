import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HttpService} from "./http.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PetComponent } from './pet/pet.component';
import { CreatePetComponent } from './create-pet/create-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PetComponent,
    CreatePetComponent,
    EditPetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
