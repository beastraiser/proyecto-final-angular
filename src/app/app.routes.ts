import { Routes } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { HomeComponent } from './pages/home/home.component';
import { AdivinanzaComponent } from './pages/adivinanza/adivinanza.component';
import { AhorcadoComponent } from './pages/ahorcado/ahorcado.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clima', component: ClimaComponent },
  { path: 'adivinanza', component: AdivinanzaComponent },
  { path: 'ahorcado', component: AhorcadoComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];
