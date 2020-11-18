import { Injectable, Inject } from '@angular/core';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';
@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {


  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService) { }

  signUp(key, value) {
    //store user entered data in session
    console.log('recieved= key:' + key + 'value:' + value);
    let sessionval = this.storage.set(key, value);
    console.log("stored in session", sessionval);
  }

  loginAction(key) {
    //check the session storage details
    console.log('recieved= key:' + key);
    return this.storage.get(key)
  }
}
