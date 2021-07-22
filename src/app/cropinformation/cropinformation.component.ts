import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Crop } from '../Models/crop';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cropinformation',
  templateUrl: './cropinformation.component.html',
  styleUrls: ['./cropinformation.component.css']
})
export class CropinformationComponent implements OnInit {
cl=new Crop();
  constructor(private ds:DataService) { }

  ngOnInit() {
    
  }
  onsubmit()
  {
    console.log(JSON.stringify(this.cl));
    this.ds.sendcropdetail(this.cl).subscribe((d)=>{
      console.log(d);
      alert("status is ok");
    })
  }
  
  }


