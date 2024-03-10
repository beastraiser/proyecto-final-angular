import { Component, OnInit } from '@angular/core';
import { PerrosService } from '../../services/perrosdb.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dogdex',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dogdex.component.html',
  styleUrl: './dogdex.component.css',
})
export class DogdexComponent implements OnInit {
  razas: any[] = [];
  imagen: string = '';

  constructor(private perrosService: PerrosService) {}

  ngOnInit(): void {
    this.perrosService.getRazas().subscribe((data) => {
      this.razas = Object.keys(data.message);
    });
  }

  cargarImagen(raza: string): void {
    this.perrosService.getImagen(raza).subscribe((data) => {
      this.imagen = data.message;
    });
  }
}
