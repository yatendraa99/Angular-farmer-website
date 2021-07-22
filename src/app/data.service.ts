import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient ) { }
  senddetail(s):any{
    return this.http.post('http://localhost:3000/detail',s);

  }
  senduserdetail(b):any{
    return this.http.post('http://localhost:3000/userdetail',b);
  }
  getdetail(){
    return this.http.get('http://localhost:3000/getdetails');  
  }
  sendcropdetail(a){
    return this.http.post('http://localhost:3000/cropdetail',a);
  }

   getinfo(){
     return this.http.get('http://localhost:3000/info');
   }
    

   checkLogin(a):any
   {
    return this.http.post('http://localhost:3000/checklogin',a);
     
   }

   infocrop():any
   {
     
        return this.http.get('http://localhost:3000/infocrop');
   }


}

