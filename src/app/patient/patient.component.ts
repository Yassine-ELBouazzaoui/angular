import { Component,OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patientList:any;
  constructor(private httpClient :HttpClient){
    this.patientList=[];
  }
  ngOnInit(): void {
    this.getPatient()
  }
  getPatient(){
    this.httpClient.get('http://localhost:8181/patient').subscribe((resu:any)=>{
        this.patientList=resu;
    })
  }

}
