import { CommonModule } from '@angular/common'; // CommonModule y FormsModule importados para poder utilizar ngModel
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-adivinanza',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './adivinanza.component.html',
  styleUrl: './adivinanza.component.css',
})
export class AdivinanzaComponent {
  numeroSecreto: number;
  numerosIntroducidos: number[] = [];
  intentos: number = 0;
  mensaje: string = '';
  numeroEntrada!: number;
  inputDisabled: boolean = false;

  constructor() {
    this.numeroSecreto = this.randomNumber(1, 100);
  }

  comprobarNumero() {
    let acierto = this.numeroSecreto === this.numeroEntrada;

    if (!this.checkInputNumber(this.numeroEntrada, 1, 100)) {
      this.mensaje = 'Número incorrecto!';
      return;
    } else if (
      this.checkRepeatedValues(this.numeroEntrada, this.numerosIntroducidos)
    ) {
      this.mensaje = 'Número ya introducido!';
      return;
    }

    this.numerosIntroducidos.push(this.numeroEntrada);

    this.mensaje = acierto
      ? '¡Enhorabuena, has acertado!'
      : this.numeroSecreto < this.numeroEntrada
      ? 'Demasiado alto'
      : 'Demasiado bajo';

    this.intentos++;

    // Deshabilitar el input y el botón si se acierta el número
    if (acierto) {
      this.inputDisabled = true;
    }
  }
  randomNumber(from: number, to: number) {
    return Math.trunc(Math.random() * to + from);
  }

  checkInputNumber(n: number, min: number, max: number) {
    return n >= min && n < max && !isNaN(n);
  }

  checkRepeatedValues(n: number, array: number[]) {
    return array.includes(n);
  }
}
