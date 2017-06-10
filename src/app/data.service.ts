import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';


import 'rxjs/Rx';

@Injectable()
export class DataService {

//Http da RESTful Service
constructor(private http: Http) { }

//@GET ALL DATA
getAllStories(userId:number){
  return this.http.get('http://localhost:8080/messenger/webapi/pupils').map(
    (res) => res.json()
  );
}

//@GET Memory by ID
getStoryById(storyid: number){
  //Call RESTful API with ID
  return this.http.get('http://localhost:8080/messenger/webapi/pupils').map(
    (res) => res.json()
  );
}

//DELETE

deleteStoryById(ID:number): Observable <any> {
  return this.http.delete("http://localhost:8080/backend/" + ID)
          .map((res) => res.json());
}




}
