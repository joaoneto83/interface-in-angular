import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'elgin-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  isActive = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isActive = !this.isActive;
  }

}
