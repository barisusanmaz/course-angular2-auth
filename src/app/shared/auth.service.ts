import {Injectable} from "@angular/core";

import {User} from "./user";
import {Router} from "@angular/router";
import {Observable, Subject} from "rxjs/Rx";

declare var firebase: any;

@Injectable()
export class AuthService{
  constructor(private router: Router) {}

  signupUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .catch(function(error) {
        console.log(error);
    });
  }

  signinUser(user: User) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .catch(function(error) {
        console.log(error);
      });
  }

  logout() {
    firebase.auth().signOut();
    this.router.navigate(['/signin'])
  }

  isAuthenticated(): Observable<boolean> {
    // var user = firebase.auth().currentUser;
    //
    // if (user) {
    //   return true;
    // } else {
    //   return false;
    // }

    const subject = new Subject<boolean>();
    var user = firebase.auth().onAuthStateChanged(function(user){
      if(user) {
        subject.next(true);
      }
      else {
        subject.next(false);
      }
    });
    return subject.asObservable();
  }
}
