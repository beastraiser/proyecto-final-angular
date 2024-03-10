import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private elementos: { nombre: string; icono: string }[] = [
    { nombre: 'clima', icono: 'thermometer-snow' },
    { nombre: 'pokeapi', icono: 'film' },
    { nombre: 'cocktail', icono: 'heart' },
    { nombre: 'dogs', icono: 'bricks' },
    // Agrega más elementos aquí con sus respectivos iconos
  ];

  constructor() {}

  buscarElemento(query: string): { nombre: string; icono: string }[] {
    // Aquí implementa la lógica de búsqueda según tu aplicación
    // Por ejemplo, puedes filtrar los elementos basados en la consulta
    return this.elementos.filter((elemento) =>
      elemento.nombre.toLowerCase().includes(query.toLowerCase())
    );
  }

  obtenerTodosElementos(): { nombre: string; icono: string }[] {
    return this.elementos;
  }
}
