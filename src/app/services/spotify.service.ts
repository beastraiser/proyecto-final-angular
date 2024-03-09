import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class spotifyService {
  private _http = inject(HttpClient);
  // 🐱‍👤: aqui metemos la url de la api de spotify
  private urlBase = 'https://api.openweathermap.org/data/2.5/weather';
  // private apiKey = '605507acf87117e111e54a3ab5238541';
  // private difKelvin = 273.15;

  getDataSpotify(valor: string): Observable<any> {
    //🐱‍👤: en el campo 'valor' puedes poner lo que consideres, pero recuerda que no todas las apis
    //necesitan pasarle un campo de busqueda
    return this._http.get(`${this.urlBase}`);
  }

  //🐱‍👤: esta función solo tienes que usarla en caso de que quieras transformar los datos,
  //algunas apis te vienen con los datos bastante sencillos
  procesarDatosClima(data: any): any {
    return {
      ciudadNombre: data.name,
      paisNombre: data.sys.country,
      /* temperatura: Math.floor(data.main.temp - this.difKelvin), */
      humedad: data.main.humidity,
      descripcion: data.weather[0].description,
      icono: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    };
  }
}
