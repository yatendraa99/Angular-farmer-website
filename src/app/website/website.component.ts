import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {

  constructor(private ds:DataService) { }

  ngOnInit() {
  }
  submit(){
    this.ds.getinfo().subscribe((d)=>{
      console.log(d);
    })
  }
}
