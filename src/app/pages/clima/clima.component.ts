import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClimaService } from '../../services/clima.service';

@Component({
  selector: 'app-clima',
  standalone: true,
  imports: [CommonModule, FormsModule], // Agregar CommonModule aquí
  templateUrl: './clima.component.html',
  styleUrl: './clima.component.css',
})
export class ClimaComponent {
  urlBase = 'https://api.openweathermap.org/data/2.5/weather';
  api_key = '605507acf87117e111e54a3ab5238541';
  difKelvin = 273.15;
  datosClima: any = {};
  ciudad: string = ''; // Definición de la propiedad ciudad

  constructor(private climaService: ClimaService) {}

  buscarClima(ciudad: string) {
    /* if (ciudad) {
      this.fetchDatosClima(ciudad);
    } */
    // nos suscribimos a la llamada, recibimos los datos y los mostramos
    this.climaService.buscarClima(ciudad).subscribe((data) => {
      //🐱‍👤: console.log es una ayuda que nos permite ver los que le metamos en la CONSOLA del navegador (f12 en navegador), es muy util :)
      console.log('ver datos:', data);
      this.mostrarDatosClima(data);
    });
  }

  fetchDatosClima(ciudad: string) {
    fetch(`${this.urlBase}?q=${ciudad}&appid=${this.api_key}`)
      .then((data) => data.json())
      .then((data) => this.mostrarDatosClima(data));
  }

  mostrarDatosClima(data: any) {
    function capitalizeFirstLetter(datosClima: any) {
      return datosClima.charAt(0).toUpperCase() + datosClima.slice(1);
    }

    this.datosClima = {
      ciudadNombre: data.name,
      paisNombre: data.sys.country,
      temperatura: Math.floor(data.main.temp - this.difKelvin),
      humedad: data.main.humidity,
      descripcion: capitalizeFirstLetter(data.weather[0].description),
      icono: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      viento: data.wind.speed,
      tempMax: Math.floor(data.main.temp_max - this.difKelvin),

      hora: `${new Date().getHours()}:${new Date().getMinutes()}`,
    };
  }
}
