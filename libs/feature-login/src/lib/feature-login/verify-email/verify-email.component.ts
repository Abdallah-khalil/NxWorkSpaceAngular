import { Component, OnInit } from '@angular/core';
import { AuthService } from 'libs/data-access-auth/src/lib/auth.service';

@Component({
  selector: 'verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  logout() {
      this.authService.logout();
    }

}
