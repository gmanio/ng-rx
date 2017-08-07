import { Component, Input, EventEmitter, Output } from '@angular/core';
import { UserModel } from '../../../model/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input()
  public user: UserModel;
  @Output()
  public updateUserInfo = new EventEmitter();

  public onUpdateUserInfo() {
    this.updateUserInfo.emit(this.user);
  }
}
