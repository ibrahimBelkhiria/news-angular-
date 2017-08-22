import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private isLogin: boolean;
  constructor(private _authservice: AuthenticationService, private router: Router) { }


  ngOnInit() {
    this.isLogin = this.isLogged();
  }

  isLogged() {

    if (localStorage.getItem('currentUser')) {
      return true;
    }else {
      return false;
    }
  }



  logout() {
    this._authservice.logout();
    this.router.navigate(['/home']);
  }

}
