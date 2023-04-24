import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {

  firstName='';
  lastName='';
  mail='';
  phone='';
  message='';
  
  constructor(public loginService:AuthenticationService,private router:Router) { }
  

  gOnInit(): void {
  }
  Message() {
    var status=confirm("Thanks for your message");
    if(status==true){
      this.router.navigate(['restaurant'])
    }
    
  }
}