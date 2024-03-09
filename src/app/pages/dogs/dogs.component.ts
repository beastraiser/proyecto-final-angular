import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DogService } from '../../services/dogs.service';

@Component({
  selector: 'app-dogs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dogs.component.html',
  styleUrl: './dogs.component.css',
})
export class DogsComponent {
  dogImage: string = '';

  constructor(private dogService: DogService) {}

  getRandomDog(): void {
    this.dogService.getRandomDogImage().subscribe(
      (data) => {
        this.dogImage = data.message;
      },
      (error) => {
        console.error('Error al obtener la imagen del perro:', error);
      }
    );
  }
}
