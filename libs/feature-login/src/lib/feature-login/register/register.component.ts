
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'libs/data-access-auth/src/lib/auth.service';

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
    this.authService.user$.subscribe(user=>{
      debugger;
    })
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
