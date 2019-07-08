import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FeatureLoginComponent } from './feature-login/feature-login.component';
import { RegisterComponent } from './feature-login/register/register.component';
import { ForgotPasswordComponent } from './feature-login/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './feature-login/verify-email/verify-email.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '',component: FeatureLoginComponent},
      { path: 'login', component: FeatureLoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'verify-email', component: VerifyEmailComponent }
    ]),
    ReactiveFormsModule
  ],
  exports: [],

  declarations: [FeatureLoginComponent, RegisterComponent, ForgotPasswordComponent, VerifyEmailComponent],
  providers: [],
})
export class FeatureLoginModule { }
