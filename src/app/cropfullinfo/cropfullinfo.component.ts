import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cropfullinfo',
  templateUrl: './cropfullinfo.component.html',
  styleUrls: ['./cropfullinfo.component.css']
})
export class CropfullinfoComponent implements OnInit {
   
  crop;
  constructor( private route:ActivatedRoute) { }

  ngOnInit() {
    

  this.route.queryParamMap.subscribe((d)=>{
    this.crop= JSON.parse(d.get('crop'));
  })
  }

}
