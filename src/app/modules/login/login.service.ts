import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User, SuperAdmin } from '../../shared/models/user.model';
import { constants } from '../../shared/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private firestore: AngularFirestore) { }

  getUser() {
    return this.firestore.collection(constants.collections.super_admin).snapshotChanges();
  }

  registerUser(user) {
    return this.firestore.collection(constants.collections.super_admin).add(user);
  }

  updateUser(user: User) {
    delete user.id;
    // this.firestore.doc('user/' + user.id).update(user);
    this.firestore.doc(`${constants.collections.super_admin}/inIcpQsMSfaTshtsgYvj`).update(user);
  }

  deleteUser(userId: string) {
    this.firestore.doc(`${constants.collections.super_admin}/${userId}`).delete();
  }

}
