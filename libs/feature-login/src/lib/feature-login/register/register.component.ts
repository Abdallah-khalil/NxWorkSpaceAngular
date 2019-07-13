
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'libs/data-access-auth/src/lib/auth.service';

import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    email: [''],
    password: [''],
    
  });
  constructor(private fb: FormBuilder,private authService: AuthService) {
  
   }

  ngOnInit() {
  }
  googleLogin() {
    this.authService.doGoogleLogin().then(response => {
    }).catch(error => {

    })
  }
  register() {
  const formValue=this.registerForm.value;
    this.authService.register(formValue.email,formValue.password).then(response => {
    })
  }

}
