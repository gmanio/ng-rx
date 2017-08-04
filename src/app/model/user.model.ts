export class UserModel {
  email: string;
  uid: string;
  age: number;
  height: number;
  gender: string;

  constructor(object) {
    this.email = object.email || '';
    this.uid = object.uid || '';
    this.age = object.age || 0;
    this.height = object.height || 0;
    this.gender = object.gender || 0;
  }
}
