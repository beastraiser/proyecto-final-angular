import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-cocktail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cocktail.component.html',
  styleUrl: './cocktail.component.css',
})
export class CocktailComponent {
  cocktail: any;
  cocktailName: string = '';
  ingredients: string[] = [];

  constructor(private cocktailService: CocktailService) {}

  searchCocktail(): void {
    if (this.cocktailName.trim() !== '') {
      this.cocktailService.searchCocktailByName(this.cocktailName).subscribe(
        (data) => {
          this.cocktail = data.drinks ? data.drinks[0] : null;
          this.getIngredientsList();
        },
        (error) => {
          console.error('Error al buscar el cóctel:', error);
          this.cocktail = null;
        }
      );
    }
  }

  getIngredientsList(): void {
    this.ingredients = [];
    for (let i = 1; i <= 15; i++) {
      // Se asume que el cóctel tiene hasta 15 ingredientes
      const ingredient = this.cocktail[`strIngredient${i}`];
      if (ingredient) {
        this.ingredients.push(ingredient);
      } else {
        break;
      }
    }
  }
}
