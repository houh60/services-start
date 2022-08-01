import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  accounts = [];

  activeusers = [];
  inactiveusers = [];

  constructor(
    private accountsService: AccountsService,
    private counterService: CounterService
    ) {}

  ngOnInit(): void {
    this.accounts = this.accountsService.getAccounts();
    this.activeusers = this.counterService.getActiveUsers();
    this.inactiveusers = this.counterService.getInactiveUsers();
  }
}
