import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PortalNameGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const allowedPortals = [
      'online-INDIA',
      'online-UAE',
      'Zoglix',
      'Credlix',
      'Enterprise',
    ];
    const portalName: any = route.paramMap.get('portalName');

    if (allowedPortals.includes(portalName)) {
      return true;
    }
    this.router.navigate(['/']); // Example: redirect to home
    return false;
  }
}
