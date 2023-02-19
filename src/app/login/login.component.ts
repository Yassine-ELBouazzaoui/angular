import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  adminform! :FormGroup
  erreur:any;

  constructor(private fb:FormBuilder,private authserv:AuthenticationService,private route:Router){}

  ngOnInit(): void {
    this.create();
  }
  create()
  {
    this.adminform = this.fb.group({
      username : this.fb.control(''),
      password : this.fb.control('')
  });
  }
  login(){
    const patiant:any ={
      username:this.adminform.value['username'],
      password: this.adminform.value['password'],
    }
    this.authserv.login(patiant).subscribe((response)=>{
        if(response=="password incorrect" || response=="admin not fond"){
           this.erreur=response;
        }else{
          this.authserv.authenticatAdmin(response).subscribe({
            next:(data:boolean)=> {
               return this.route.navigate(['/admin/patients'])
            },
          })
        }
     });
  }

}
