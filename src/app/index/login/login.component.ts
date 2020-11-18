import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from '../../authorize.service';
import {Router} from '@angular/router';

  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(private authservice : AuthorizeService,private router: Router) { }

  ngOnInit() {
  }
  
  login(key){
    if(this.authservice.loginAction(key)){
      this.router.navigate(['/employees']);
    }
    else{
      alert(`invalid user`);
    }
  }

}
