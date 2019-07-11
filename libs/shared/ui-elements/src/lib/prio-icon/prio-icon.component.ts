import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'prio-icon',
  templateUrl: './prio-icon.component.html',
  styleUrls: ['./prio-icon.component.scss']
})
export class PrioIconComponent implements OnInit {
  @Input() icon = '';
  constructor() { }

  ngOnInit() {
  }

}
