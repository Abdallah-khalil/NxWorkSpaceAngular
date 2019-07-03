
import { Pokemon } from './pokemon.model';

export interface User {
  id: number;
  name: string;
  creation: Date;
  color: string;
  pokemon: Pokemon;

  // Type for dynamic access to specific properties
  [key: string]: any;
}
