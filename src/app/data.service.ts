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
  return this.http.get('http://172.31.127.17:8000/api/stories/').map(
    (res) => res.json()
  );
}

//@GET Memory by ID
getStoryById(storyid: number){
  //Call RESTful API with ID
  return this.http.get('http://172.31.127.17:8000/api/stories/').map(
    (res) => res.json()
  );
}

//DELETE Story
deleteStoryById(ID:number): Observable <any> {
  return this.http.delete("http://localhost:8080/backend/" + ID)
          .map((res) => res.json());
}

//POST photo an retrieve ID
postPhoto(photo: any){
  //TODO upload Photo an Post to Database, retrieve ID in exchange
  var data = {
    name : 'test',
    image:photo
  }
  return this.http.post("http://172.31.127.17:8000/api/uploads/" , data)
          .map((res) => res.json());

}


//POST Story to DataBase
postStoryToDatabase(File,comment,userID,data:JSON):Observable<any> {
  return this.http.post("http://localhost:8080/backend/",data)
    .map((res) => res.json());
}

}
