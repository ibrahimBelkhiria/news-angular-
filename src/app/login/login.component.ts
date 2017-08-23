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
   error: string;
   fail: boolean;
  constructor( private router: Router,
               private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.authenticationService.logout();
  }


  login(e) {
       e.preventDefault();

    this.authenticationService.login(this.username, this.password)
      .subscribe(result => {

          console.log(result);
          this.router.navigate(['/news']);

      }, loginError => this.error = loginError.message + ' : verify  your username or password !  ');







  }

}
