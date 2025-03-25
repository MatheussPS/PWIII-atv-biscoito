import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-botoes',
  imports: [],
  templateUrl: './botoes.component.html',
  styleUrl: './botoes.component.css'
})
export class BotoesComponent {

  @Output() resultado = new EventEmitter();



  quebrarBiscoito(): void {
    this.resultado.emit(true);
  }

  reiniciarBiscoito(): void{
    this.resultado.emit(false);
  }

}
