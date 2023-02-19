import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private auth:AuthenticationService,private router:Router){

  }

  logout(){
    this.auth.logout().subscribe({
      next:(data:boolean)=>{
        this.router.navigate(['/login']);
      }
    });
  }
}
