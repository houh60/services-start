import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  inactiveusers = [];
  constructor(
    private counterService: CounterService
  ) { }

  ngOnInit(): void {
    this.inactiveusers = this.counterService.getInactiveUsers();
    this.counterService.inactiveUserChanged.subscribe(inactiveusers => this.inactiveusers = inactiveusers);
  }

  toActive(username: string) {
    this.counterService.toActive(username);
  }

}
