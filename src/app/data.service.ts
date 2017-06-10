import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {RequestOptions, Request, RequestMethod} from '@angular/http';

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

//DELETE Story
deleteStoryById(ID:number): Observable <any> {
  return this.http.delete("http://localhost:8080/backend/" + ID)
          .map((res) => res.json());
}

//POST Story
postStory(File,comment,userID,data:JSON):Observable<any> {
  let post =
  {
    "birthdate": "1994-07-28T00:00:00+02:00",
    "city": "Augsburg",
    "email": "ult.laan@mgmail.da"
  }


  return this.http.post("http://localhost:8080/backend/",data)
    .map((res) => res.json());
}
}
