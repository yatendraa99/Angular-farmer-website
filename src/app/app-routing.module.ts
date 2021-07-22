import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ActComponent } from './act/act.component';
import { DocumentsComponent } from './documents/documents.component';
import { MediaComponent } from './media/media.component';
import { HistoryComponent } from './history/history.component';
import { ContactComponent } from './contact/contact.component';
import { RecruitmentsComponent } from './recruitments/recruitments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WebsiteComponent } from './website/website.component';
import { CropinformationComponent } from './cropinformation/cropinformation.component';
import { CropdetailsComponent } from './cropdetails/cropdetails.component';
import { AuthGuard } from './auth.guard';
import { CropfullinfoComponent } from './cropfullinfo/cropfullinfo.component';



const routes: Routes = [

  {path:'',component:WebsiteComponent, children:[

    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
   
    {path:'about',component:AboutComponent,children:[
    {path:'history',component:HistoryComponent}
    ]},
    {path:'act',component:ActComponent},
    {path:'documents',component:DocumentsComponent},
    {path:'media',component:MediaComponent},
    {path:'contact',component:ContactComponent},
    {path:'recruitments',component:RecruitmentsComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'cropdetails',component:CropdetailsComponent},
    {path:'cropfullinfo',component:CropfullinfoComponent}
  
  ]},
  {
     path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard], children:[

      {path:'cropinformation',component:CropinformationComponent}

     ]}
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
