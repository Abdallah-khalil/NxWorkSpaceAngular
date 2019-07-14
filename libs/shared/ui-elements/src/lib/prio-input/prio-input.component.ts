import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-prio-workspace-prio-input',
  templateUrl: './prio-input.component.html',
  styleUrls: ['./prio-input.component.scss']
})
export class PrioInputComponent implements OnInit {
  vertical = {
    one: '',
    two: '',
    three: '',
    four: '',
  };
  constructor() { }

  ngOnInit() {
  }

}
