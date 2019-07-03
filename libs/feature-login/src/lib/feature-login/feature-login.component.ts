import { AuthService } from './../../../../data-access-auth/src/lib/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'feature-login',
  templateUrl: './feature-login.component.html',
  styleUrls: ['./feature-login.component.scss']
})
export class FeatureLoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  googleLogin() {
    this.authService.doGoogleLogin().then(response => {
      debugger;
    }).catch(error => {
      debugger;

    })
  }
}
