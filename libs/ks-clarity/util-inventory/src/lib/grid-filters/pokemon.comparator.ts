import { ClrDatagridComparatorInterface } from '@clr/angular/data';
import { User } from '../utils';

export class PokemonComparator implements ClrDatagridComparatorInterface<User> {
  compare(a: User, b: User) {
    return a.pokemon.number - b.pokemon.number;
  }
}
