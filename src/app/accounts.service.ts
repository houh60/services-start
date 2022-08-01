import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}

  getAccounts() {
    return this.accounts;
  }

  addAccount(name: string, status: string) {
    console.log('name: ', name);
    this.accounts.push({ name: name, status: status });
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, newStatus: string) {
    console.log('newStatus: ', newStatus);
    this.accounts[id].status = newStatus;
    this.loggingService.logStatusChange(newStatus);
  }
}
