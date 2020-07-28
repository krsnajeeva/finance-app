import { Injectable, NgZone } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { User, SuperAdmin } from '../../shared/models/user.model';
import { constants } from '../../shared/constants/constants';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private firestore: AngularFirestore,
              private afAuth: AngularFireAuth, // Inject Firebase auth service
              private ngZone: NgZone // NgZone service to remove outside scope warning) { }
  ) {
  }

  getUser() {
    return this.firestore.collection(constants.collections.super_admin).snapshotChanges();
  }

  getEmployee() {
    return this.firestore.collection(constants.collections.employee).snapshotChanges();
  }
  
  registerUser(user) {
    return this.firestore.collection(constants.collections.super_admin).add(user);
  }

  registerEmployee(employee) {
    return this.firestore.collection(constants.collections.employee).add(employee);
  }

  updateUser(user: User) {
    delete user.id;
    // this.firestore.doc('user/' + user.id).update(user);
    this.firestore.doc(`${constants.collections.super_admin}/inIcpQsMSfaTshtsgYvj`).update(user);
  }

  deleteUser(userId: string) {
    this.firestore.doc(`${constants.collections.super_admin}/${userId}`).delete();
  }

  deleteEmployee(employeeId: string) {
    this.firestore.doc(`${constants.collections.employee}/${employeeId}`).delete();
  }

  SendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
      .then(() => {
        window.alert('mail sent successfully');
      });
  }

  SignUp(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert(`firebase auth user ${email} created successfully`);
      }).catch((error) => {
        // window.alert(error.message);
      });
  }

  // Sign in with email/password
  SignIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        if (result.user.emailVerified !== true) {
          // window.alert('Please validate your email address.');
          // return false;
        } else {
          this.ngZone.run(() => {
            window.alert(`firebase auth user ${email} logged in successfully`);
            // return true;
          });
        }

      }).catch((error) => {
        // window.alert(error.message);
      });
  }

  resetPasswordInit(email) {
    return this.afAuth.auth.sendPasswordResetEmail(
      email,
      { url: 'http://localhost:4200' })
      .then(() => {
        window.alert('mail sent successfully');
      });
  }

}
