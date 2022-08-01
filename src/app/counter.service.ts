import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  activeUsers = [
    { name: 'Jack Sparrow', status: 'active' },
    { name: 'Hector Barbossa', status: 'active' },
    { name: 'Davy Jones', status: 'active' },
    { name: 'Elizabeth Swann', status: 'active' },
    { name: 'Tia Dalma', status: 'active' },
    { name: 'William Turner', status: 'active' },
  ];
  inactiveUsers = [
    { name: 'Governor Swann', status: 'inactive' },
    { name: 'Joshamee Gibbs', status: 'inactive' },
    { name: 'Pintel', status: 'inactive' },
    { name: 'Ragetti', status: 'inactive' },
  ];

  activeUserChanged = new EventEmitter();
  inactiveUserChanged = new EventEmitter();

  constructor() {}

  getActiveUsers() {
    return this.activeUsers;
  }

  getInactiveUsers() {
    return this.inactiveUsers;
  }

  toInactive(name: string) {
    let userToChange;
    this.activeUsers.find(user => {
      if(user.name === name) {
        user.status = 'inactive';
        userToChange = user;
      }
    })
    this.activeUsers = this.activeUsers.filter(user => userToChange.name !== user.name);
    this.inactiveUsers.push(userToChange);

    this.activeUserChanged.emit(this.activeUsers);
    this.inactiveUserChanged.emit(this.inactiveUsers);
  }

  toActive(name: string) {
    let userToChange;
    this.inactiveUsers.find(user => {
      if(user.name === name) {
        user.status = 'active';
        userToChange = user;
      }
    })
    this.inactiveUsers = this.inactiveUsers.filter(user => userToChange.name !== user.name);
    this.activeUsers.push(userToChange);

    this.activeUserChanged.emit(this.activeUsers);
    this.inactiveUserChanged.emit(this.inactiveUsers);
  }
}
