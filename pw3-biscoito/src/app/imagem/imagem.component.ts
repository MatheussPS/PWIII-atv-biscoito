// Matheus Pinter e Paulo Sergio

import { Component } from '@angular/core';

@Component({
  selector: 'app-imagem',
  imports: [],
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.css'
})
export class ImagemComponent {

  imagemBiscoito = "biscoito-0.png"

  quebrarBiscoito(): void {
    this.imagemBiscoito = 'biscoito-1.png';
  }

  reiniciarBiscoito(): void{
    this.imagemBiscoito = 'biscoito-0.png'
  }
}
