import { ClrDatagridStringFilterInterface } from '@clr/angular/data';
import { User } from '../utils';


export class PokemonFilter implements ClrDatagridStringFilterInterface<User> {
  accepts(user: User, search: string): boolean {
    return (
      '' + user.pokemon.number === search ||
      user.pokemon.name.toLowerCase().indexOf(search) >= 0
    );
  }
}
