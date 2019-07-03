import { Component, OnInit, EventEmitter } from '@angular/core';
import { ClrDatagridFilterInterface } from '@clr/angular/data';
import { COLORS, User } from '../utils';


@Component({
  selector: 'ks-clr-color-filter',
  templateUrl: './color-filter.component.html',
  styleUrls: ['./color-filter.component.scss']
})
export class ColorFilterComponent implements ClrDatagridFilterInterface<User> {
  allColors = COLORS;
  selectedColors: { [color: string]: boolean } = {};
  nbColors = 0;

  changes: EventEmitter<any> = new EventEmitter<any>(false);

  listSelected(): string[] {
    const list: string[] = [];
    for (const color in this.selectedColors) {
      if (this.selectedColors[color]) {
        list.push(color);
      }
    }
    return list;
  }

  toggleColor(color: string) {
    this.selectedColors[color] = !this.selectedColors[color];
    this.selectedColors[color] ? this.nbColors++ : this.nbColors--;
    this.changes.emit(true);
  }

  accepts(user: User) {
    return this.nbColors === 0 || this.selectedColors[user.color];
  }

  isActive(): boolean {
    return this.nbColors > 0;
  }
}
