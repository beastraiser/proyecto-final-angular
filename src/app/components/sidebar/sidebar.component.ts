import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  elementosEncontrados: { nombre: string; icono: string }[] = [];
  todosElementos: { nombre: string; icono: string }[] = [];

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.todosElementos = this.searchService.obtenerTodosElementos();
    this.elementosEncontrados = this.todosElementos;
  }

  buscarElemento(event: any): void {
    const query = event?.target?.value.trim();
    if (!query) {
      this.elementosEncontrados = this.todosElementos;
      return;
    }
    this.elementosEncontrados = this.searchService.buscarElemento(query);
  }
}
