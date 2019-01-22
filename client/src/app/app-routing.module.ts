import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PetComponent } from './pet/pet.component';
import { CreatePetComponent } from './create-pet/create-pet.component';

import { EditPetComponent } from './edit-pet/edit-pet.component';

const routes: Routes = [
{
    path: 'home',
    component:HomeComponent
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"/home"
  },
  {
    path:"pets/new",
    component:CreatePetComponent
  },
  {
    path:'pets/:pet_id',
    component:PetComponent
  },
  {
    path:"pets/:pet_id/edit",
    component:EditPetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
