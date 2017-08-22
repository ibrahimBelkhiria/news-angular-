import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthorizeGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {

    return this.isAuthorized();
  }

  isAuthorized(): boolean {

    if (JSON.parse(localStorage.getItem('currentUser')).username === 'dhia') {
      return true;
    } else {
      alert('You are not authorized to view this page !');
      this.router.navigate(['/news']);
      return false;
    }


  }


}
