

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'libs/data-access-auth/src/lib/auth.service';


@Component({
  selector: 'forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  resetPasswordForm = this.fb.group({
    email: ['']
  });
  constructor(private fb: FormBuilder,private authService: AuthService) { }

  ngOnInit() {
  }
  googleLogin() {
    this.authService.doGoogleLogin().then(response => {
    }).catch(error => {

    })
  }
  sendPasswordResetEmail() {
  const formValue=this.resetPasswordForm.value;
    this.authService.sendPasswordResetEmail(formValue.email).then(response => {
      alert("check your email")
    }).catch(error=>{
      alert(error.message);
    })
    // .fore(formValue.email,formValue.password).then(response => {
    // })
  }

}
