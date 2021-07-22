import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email;
pass;
  constructor(private ds:DataService ,private router:Router) { }

  ngOnInit() { 
  
  }
   sumbit(){
    

  this.ds.checkLogin({email:this.email, pass:this.pass}).subscribe((d)=>{

console.log(d);

    if(d.status=="ok")
    {
      localStorage.setItem('username', this.email);
      // localStorage.setItem('role', d.desc[0].role);
      this.router.navigate(['/dashboard']);
    }
    else{
      alert("credential not correct");
    }



  })

  }
  
}


