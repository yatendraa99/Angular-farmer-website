import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignUpForm } from '../Models/signUpForm.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css' ,
      './vendor/bootstrap/css/bootstrap.min.css',
      './vendor/metisMenu/metisMenu.min.css',
      './dist/css/sb-admin-2.css',
      './vendor/morrisjs/morris.css',
      './vendor/font-awesome/css/font-awesome.min.css'

    ]



})
export class DashboardComponent implements OnInit {

  sForm = new SignUpForm();
  constructor(private route: ActivatedRoute, private router:Router) { }
  fun(){
    localStorage.removeItem("username");

     this.router.navigate(['/']);
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe( (data ) => {
     this.sForm.email = data.get('email');
     this.sForm.name = data.get('name');
     this.sForm.role = localStorage.getItem("role")
    });

  }

}
