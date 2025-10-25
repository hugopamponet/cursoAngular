import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {

  numero1: number = 0;
  numero2: number = 0;
  result: number = 0;

  calcularResultado() {
    this.result = this.numero1 + this.numero2;
  }
}
