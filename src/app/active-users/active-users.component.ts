import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  activeusers = [];

  constructor(
    private counterService: CounterService
  ) { }

  ngOnInit(): void {
    this.activeusers = this.counterService.getActiveUsers();
    this.counterService.activeUserChanged.subscribe(activeusers => this.activeusers = activeusers);
  }

  toInactive(username: string) {
    this.counterService.toInactive(username);
  }
}
