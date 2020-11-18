import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { AuthorizeService } from '../../authorize.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 //Property for the gender
 private gender: string[];
 //Property for the user
 private user:User;

 constructor(private authservice : AuthorizeService,private router: Router) { }
 ngOnInit() {

   this.gender =  ['Male', 'Female', 'Others'];
   //Create a new user object
   this.user = new User();
 }

  onFormSubmit(eve) {
    console.log(`userrr mail ${eve.value['email']}`);
    console.log(`userrr pwd eve.value['password']['pwd']}`)
    this.authservice.signUp(eve.value['email'],eve.value['password']['pwd']);
    //  this.user = value;
    //  console.log( this.user);
    //  console.log("valid: " + valid);
   }

   existing(){
    this.router.navigate(['/index/login']);
   }

}
