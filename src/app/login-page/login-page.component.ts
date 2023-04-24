import { Component, OnInit } from "@angular/core";
import { Route, Router } from "@angular/router";
import { AuthenticationService } from "../authentication.service";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  username = '';
  password = '';
  invalidLogin = false
  emessage= '';

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate(['restaurant']);
      console.log("navigate..");
      this.invalidLogin = false;
    } else
      this.invalidLogin = true;
      this.emessage='*enter correct credentials';
  }

  
}
