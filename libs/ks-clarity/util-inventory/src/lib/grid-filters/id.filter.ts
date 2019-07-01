import { ClrDatagridNumericFilterInterface } from '@clr/angular/data';

export class IDFilter implements ClrDatagridNumericFilterInterface<any> {
  accepts(row: any, low: number, high: number): boolean {
    if (low !== null && row.id < low) {
      return false;
    }
    if (high !== null && row.id > high) {
      return false;
    }
    return true;
  }
}
