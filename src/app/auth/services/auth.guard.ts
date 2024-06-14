import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserStoreService } from '../../account/services/user.store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userStore: UserStoreService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const user = this.userStore.getUser();
    if (user) {
      return true;
    } else {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
}