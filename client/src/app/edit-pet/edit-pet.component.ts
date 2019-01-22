import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from "@angular/router";
import {HttpService} from "../http.service";

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {

	pet:any;
	error: string;

  constructor(private _router:Router, private _activatedRoute:ActivatedRoute, private _httpService:HttpService) { }

  ngOnInit() {
  this._activatedRoute.params.subscribe((params:Params)=>{
      let obs = this._httpService.getPet(params['pet_id'])
      obs.subscribe(data=>{
        this.pet = data;
      })
    })
  }
  updatePet(){
    let obs = this._httpService.updatePet(this.pet)
    obs.subscribe(data=>{
      if('errors' in data){
        this.error = data['message'];
      }
      else{
        // this.resetPage();
        this._router.navigate(['/'])
      }
    })
  }

}
