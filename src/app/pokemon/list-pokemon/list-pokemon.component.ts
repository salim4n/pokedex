import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {

  pokemonList: Pokemon[];
  pokemonSelected: Pokemon | undefined;

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemonList = this.pokemonService.getPokemonList();
  }

    selectPokemon(pokemonId : string) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    if (pokemon) {
      this.pokemonSelected = pokemon;
    } else {
      this.pokemonSelected = pokemon;
    }
    }

  goToPokemon(pokemon:Pokemon) {
    this.router.navigate(['/pokemons', pokemon.id]);
  }

}
