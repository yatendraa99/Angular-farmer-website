import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ActComponent } from './act/act.component';
import { DocumentsComponent } from './documents/documents.component';
import { MediaComponent } from './media/media.component';
import { HistoryComponent } from './history/history.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecruitmentsComponent } from './recruitments/recruitments.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WebsiteComponent } from './website/website.component';
import { CropinformationComponent } from './cropinformation/cropinformation.component';
import { CropdetailsComponent } from './cropdetails/cropdetails.component';
import { CropfullinfoComponent } from './cropfullinfo/cropfullinfo.component';
import { CropSoilPipe } from './crop-soil.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ActComponent,
    DocumentsComponent,
    MediaComponent,
    HistoryComponent,
    DashboardComponent,
    RecruitmentsComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    WebsiteComponent,
    CropinformationComponent,
    CropdetailsComponent,
    CropfullinfoComponent,
    CropSoilPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
