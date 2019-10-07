import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mailbox-element',
  templateUrl: './mailbox-element.component.html',
  styleUrls: ['./mailbox-element.component.css']
})
export class MailboxElementComponent {
  @Input() id: number;
  @Input() mailbox: { value: number, isActive: boolean };

  constructor() { }


  public gibAus(array: number[]) {
    for (let value in array) {
      console.log('RAM\n' + array[value]);
    }
  }
  public getActiveStatus(): boolean {
    if (this.mailbox.isActive === true)
      return true
    else return false
  }
}
