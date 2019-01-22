import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.css']
})
export class CreatePetComponent implements OnInit {
	error:String="";
  	pet:any;
  	constructor(private _httpService:HttpService, private _router:Router) { }

  ngOnInit() {
  	this.resetPage();
  }
  resetPage(){
    this.pet = {
      name:"",
      type:"",
      description:"",
      skill1:"",
      skill2:"",
      skill3:""
    }
    this.error = ""
  }
  createPet(){
    let obs = this._httpService.createPet(this.pet)
    obs.subscribe(data=>{
      console.log(data);
      if("errors" in data){
        this.error = data["message"]
      }
      else{
        this.resetPage();
        this._router.navigate(['/'])
      }
    })
  }

}
