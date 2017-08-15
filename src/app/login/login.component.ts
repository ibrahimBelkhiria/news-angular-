import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   username: string;
   password: string;
  error = '';
  constructor( private router: Router,
               private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.authenticationService.logout();
  }


  login(e) {
       e.preventDefault();

    this.authenticationService.login(this.username, this.password)
      .subscribe(result => {
        if (result === true) {
          // login successful
          this.router.navigate(['/news']);
        } else {
          // login failed
          this.error = 'Username or password is incorrect';

        }
      });







  }

}
