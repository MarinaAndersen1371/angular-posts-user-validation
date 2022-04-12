import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[];

  constructor() {
    this.users = [
      {
        firstName: 'Klava',
        lastName: 'Burda',
        email: 'klava@web.de',
        isActive: true,
        registered: new Date('02/02/2022 02:02:00'),
        hide: true,
      },
      {
        firstName: 'Max',
        lastName: 'Maximilian',
        email: 'max@web.de',
        isActive: false,
        registered: new Date('02/02/2022 02:02:00'),
        hide: true,
      },
      {
        firstName: 'John',
        lastName: 'Johnson',
        email: 'john@web.de',
        isActive: true,
        registered: new Date('02/02/2022 02:02:00'),
        hide: true,
      },
    ];
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
