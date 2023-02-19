import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AjouterPatientService } from '../services/ajouter-patient.service';

@Component({
  selector: 'app-show-patient',
  templateUrl: './show-patient.component.html',
  styleUrls: ['./show-patient.component.css']
})
export class ShowPatientComponent implements OnInit {
  partiant:any =null;
  patiantid:any =null
    constructor(private activeRouter: ActivatedRoute,private ajouterPatientService:AjouterPatientService){

    }

  ngOnInit(): void {
    this.patiantid = this.activeRouter.snapshot.paramMap.get('id');
    this.show();
  }
  show(){
    this.ajouterPatientService.show(this.patiantid).subscribe((response:any)=>{
      this.partiant = response;
    });
  }
}
