import { Injectable } from '@angular/core';
import { POKEMONS } from './list-pokemon/mock-pokemon-list';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {

  getPokemonList():Pokemon[] {
    return POKEMONS;
  }

  getPokemonById(PokemonId: number): Pokemon|undefined {
    return POKEMONS.find(pokemon => pokemon.id == PokemonId);
  }

  getPokemonTypeList(): string[] {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrique',
      'Poison',
      'Fee',
      'Vol',
      'Combat',
      'Psy'
    ];
  }
}
