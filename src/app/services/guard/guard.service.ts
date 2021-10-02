import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GuardService implements CanActivate {
  constructor(private router: Router) {}

  //canActivate devuelve un boolean dependiendo de la logica de seguridad que
  //apliquemos a las rutas
  canActivate() {
    if (window.localStorage.getItem('USUARIOS_APP_USER')) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
