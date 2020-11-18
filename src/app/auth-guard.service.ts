import { Injectable, Inject } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  

  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService) { }
  canActivate(): boolean{
   if(this.storage.get('user') && this.storage.get('user').valid){
      return true;
   }
   alert("not logged in");
   return false;
  }

}
