import { Component ,OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AjouterPatientService } from '../services/ajouter-patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit{
  constructor(private fb:FormBuilder,private ajouterPatientService:AjouterPatientService,private router:Router){

  }
  registerform!:FormGroup
  ngOnInit(): void {
    this.createform();
  }
  createform(){
    this.registerform = this.fb.group({
         name:[''],
         age:[''],
         trestbps:[''],
         cp:[''],
         sex:[''],
         exang:[''],
         thalach:[''],
         fbs:[''],
         restecg:[''],
         chol:[''],
         slope:[''],
         oldpeak:[''],
         ca:[''],
         thal:[''],
         num:[''],
    })
  }
  ajouter(){
    const patiant:any ={
       id:30,
       name:this.registerform.value['name'],
       age: this.registerform.value['age'],
       sex: this.registerform.value['sex'],
       cp: this.registerform.value['cp'],
       trestbps: this.registerform.value['trestbps'],
       chol: this.registerform.value['chol'],
       fbs: this.registerform.value['fbs'],
       restecg: this.registerform.value['restecg'],
       thalach: this.registerform.value['thalach'],
       exang: this.registerform.value['exang'],
       oldpeak: this.registerform.value['oldpeak'],
       slope: this.registerform.value['slope'],
       ca: this.registerform.value['ca'],
       thal: this.registerform.value['thal'],
       num: this.registerform.value['num']
    };
   this.ajouterPatientService.ajouter(patiant).subscribe((response)=>{
    console.log(response);
    this.router.navigate(['/patients'])
   });
    //this.router.navigate(['/patients'])
    
  }
    
  }


