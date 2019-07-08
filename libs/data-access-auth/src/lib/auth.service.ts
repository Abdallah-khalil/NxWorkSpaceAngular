import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from "@angular/router";
import { auth } from 'firebase/app';
import { User } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;
  constructor(public afAuth: AngularFireAuth, public router: Router) {

    this.afAuth.authState.subscribe(user => {
      debugger;
      if (user) {
        this.user = user;
        if(!user.emailVerified){
          this.sendEmailVerification();
        }else{
          this.router.navigate(['auth/register']);
        }
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        this.router.navigate(['auth/login']);
        localStorage.setItem('user', null);
      }
    })
  }
  async login(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(res => {
          this.router.navigate(['auth/register']);
          resolve(res);
        }).catch((err) => {
          reject(err); // Here.
        });
    })


  }
  async register(email: string, password: string) {
    var result = await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    this.sendEmailVerification();
  }
  async sendEmailVerification() {
    await this.afAuth.auth.currentUser.sendEmailVerification()
    this.router.navigate(['auth/verify-email']);
  }
  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
  }
  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['auth/login']);
  }
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }
  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);
        })
    })
  }
}
