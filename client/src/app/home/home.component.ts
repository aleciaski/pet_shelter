import { Component, OnInit } from '@angular/core';
import {HttpService} from "../http.service";
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allPets:any;
  constructor(private _httpService:HttpService) { }

  ngOnInit() {
  	let obs= this._httpService.getAllPets();
  	obs.subscribe(data=>{
  		this.allPets= data;
  	})
  }

}
