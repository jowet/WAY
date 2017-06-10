import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class DataService {

//Http da RESTful Service
constructor(private http: Http) { }

//@GET ALL DATA
getAllMemories(userId:number){
  return this.http.get('http://localhost:8080/messenger/webapi/pupils').map(
    (res) => res.json()
  );
}

//@GET Memory by ID
getMemoryById(memoryid: number){
  //Call RESTful API with ID
  return this.http.get('http://localhost:8080/messenger/webapi/pupils').map(
    (res) => res.json()
  );
}




}
