import { Component, OnInit, ViewChild } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
  };
  users: User[];
  showExtended: boolean = false;
  showUserForm: boolean = false;
  loaded: boolean = true;
  enableAdd: boolean = false;
  faPlus = faPlus;
  faMinus = faMinus;
  @ViewChild('userForm') form: any;

  constructor(private userSerice: UserService) {}

  ngOnInit(): void {
    this.userSerice.getUsers().subscribe((users) => {
      this.users = users;
      this.loaded = true;
    });
  }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.userSerice.addUser(value);
      this.form.reset();
    }
  }
}
