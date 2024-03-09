import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokeapi',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pokeapi.component.html',
  styleUrl: './pokeapi.component.css',
})
export class PokeapiComponent implements OnInit {
  pokemon: any;
  pokemonName: string = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    // No necesitamos obtener detalles de un Pokemon específico al inicializar el componente
  }

  getPokemonDetails(): void {
    if (this.pokemonName.trim() !== '') {
      this.pokemonService
        .getPokemonByIdOrName(this.pokemonName.toLowerCase())
        .subscribe(
          (data) => {
            this.pokemon = data;
          },
          (error) => {
            console.error('Error al obtener los detalles del Pokemon:', error);
            this.pokemon = null;
          }
        );
    }
  }
}
