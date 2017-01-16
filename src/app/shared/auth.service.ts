import {User} from "./user";

declare var firebase: any;

export class AuthService{
  signupUser(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .catch(function(error) {
        console.log(error);
    });
  }
}
