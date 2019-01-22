import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class HttpService {

  constructor(private _http:HttpClient) { }
  getAllPets(){
    return this._http.get('/api/pets')
  }
  createPet(pet){
    return this._http.post('/api/pets', pet)
  }
  getPet(pet_id){
    return this._http.get('/api/pets/' + pet_id)
  }
  castLike(num, pet_id){
    return this._http.patch('/api/pets/' + pet_id, {likes:num})
  }
  deletePet(pet_id){
    return this._http.delete('/api/pets/' +pet_id)
  }
  updatePet(pet){
    return this._http.put('/api/pets/'+pet._id, pet)
  }

}
