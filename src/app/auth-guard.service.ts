import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate() {
    // console.log('AuthGuard#canActivate called');
    // return false to guard route, not let user go to it
    return true;
  }
}
