import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-page',
  templateUrl: './feedback-page.component.html',
  styleUrls: ['./feedback-page.component.css']
})
export class FeedbackPageComponent {
  constructor(public loginService:AuthenticationService,private router:Router) { }
  
  ngOnInit(): void {
  }
    Feedback() {
    var status=confirm("Thanks for your valuable comments");
    if(status==true){
      this.router.navigate(['restaurant'])
    }
    
  }
}
