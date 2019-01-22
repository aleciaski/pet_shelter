import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

	pet_id: string;
	pet: any;


  constructor(private _activatedRoute:ActivatedRoute, private _httpService:HttpService) { }

  ngOnInit() {
  this._activatedRoute.params.subscribe((params:Params)=>{
      this.pet_id = params['pet_id'];
      this.updatePet();
    })
  }

  castLike(num, pet_id){
    let obs = this._httpService.castLike(num,pet_id);
    obs.subscribe(data=>{
      this.updatePet();
    });
  }
  updatePet(){
    let obs = this._httpService.getPet(this.pet_id);
    obs.subscribe(data=>{
      this.pet = data;
    })
  }
  deletePet(pet_id){
    let obs = this._httpService.deletePet(pet_id);
    obs.subscribe(data=>{
      this.updatePet();
    });
  }

}
