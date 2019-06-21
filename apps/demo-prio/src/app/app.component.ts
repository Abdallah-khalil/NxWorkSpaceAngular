import { Component } from '@angular/core';

@Component({
  selector: 'prio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-prio';
  links = [
    { path: 'alerts', title: 'Alerts' },
    { path: 'badges', title: 'Badges' },
    { path: 'buttons', title: 'Buttons' },
    { path: 'cards', title: 'Cards' },
    { path: 'checkboxes', title: 'Checkboxes' }
  ];

  constructor() {}
}
