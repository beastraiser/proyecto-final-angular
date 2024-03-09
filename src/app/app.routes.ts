import { Routes } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { HomeComponent } from './pages/home/home.component';
import { AdivinanzaComponent } from './pages/adivinanza/adivinanza.component';
import { AhorcadoComponent } from './pages/ahorcado/ahorcado.component';
import { CalculadorabmiComponent } from './pages/calculadorabmi/calculadorabmi.component';
import { PokeapiComponent } from './pages/pokeapi/pokeapi.component';
import { CocktailComponent } from './pages/cocktail/cocktail.component';
import { DogsComponent } from './pages/dogs/dogs.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clima', component: ClimaComponent },
  { path: 'pokeapi', component: PokeapiComponent },
  { path: 'cocktail', component: CocktailComponent },
  { path: 'dogs', component: DogsComponent },
  { path: 'adivinanza', component: AdivinanzaComponent },
  { path: 'ahorcado', component: AhorcadoComponent },
  { path: 'calculadorabmi', component: CalculadorabmiComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];
