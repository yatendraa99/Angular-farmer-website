import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cropdetails',
  templateUrl: './cropdetails.component.html',
  styleUrls: ['./cropdetails.component.css']
})
export class CropdetailsComponent implements OnInit {
crops;
  constructor(private ds:DataService,private router:Router) { }

  ngOnInit() {
     
    this.ds.infocrop().subscribe((d)=>{
      if(d.status=="ok")
      this.crops=d.desc;
      else
      alert("some error occured")
    })
  }

  sendCrop(p)
  {
    this.router.navigate(['/cropfullinfo'], {queryParams:{crop:JSON.stringify(p)}});   //display karne ke liye
  }

}
