import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from "@angular/router";
import { auth } from 'firebase/app';
import { User } from './user.model'; // optional
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;

  user: User;
  constructor(public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    public router: Router) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    );

  }

  async login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(res => {
        this.router.navigate(['auth/register']);
      }).catch((error) => {
        alert(error.message);
      });
  }
  async register(email: string, password: string) {
    await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
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
