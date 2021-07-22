import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { Reg } from './model/reg';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
cl = new Reg();
  constructor(private ds:DataService) { }

  ngOnInit() {
  }
submit(){
  // alert("sumbit");
  this.ds.senduserdetail(this.cl).subscribe((d)=>{
    console.log(d);

  })
}
 }
