import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { PatientComponent } from './patient/patient.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ShowPatientComponent } from './show-patient/show-patient.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './guards/authentication.guard';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavComponent,
    PatientComponent,
    HomeComponent,
    AddPatientComponent,
    ShowPatientComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'login',component:LoginComponent,},
      {path:'',redirectTo:'admin/patients',pathMatch:'full'},
      {path:'admin' , component:HomeComponent ,canActivate:[AuthenticationGuard],children :[
        {path:'patients' , component:PatientComponent},
        {path:'patientAdd' , component:AddPatientComponent},
        {path:'patient/:id' , component:ShowPatientComponent},
      ]},
      
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
