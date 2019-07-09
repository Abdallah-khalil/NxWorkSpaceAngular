import { AuthService } from './../../../../data-access-auth/src/lib/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'feature-login',
  templateUrl: './feature-login.component.html',
  styleUrls: ['./feature-login.component.scss']
})
export class FeatureLoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: [''],
    password: [''],
    
  });
  constructor(private fb: FormBuilder,private authService: AuthService) { }

  ngOnInit() {
  }
  googleLogin() {
    this.authService.user$.subscribe(user=>{
      debugger;
    })
    this.authService.doGoogleLogin().then(response => {
    }).catch(error => {

    })
  }
  login() {
  const formValue=this.loginForm.value;
    this.authService.login(formValue.email,formValue.password);
  }
 
}
