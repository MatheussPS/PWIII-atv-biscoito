// Matheus Pinter e Paulo Sergio

import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-imagem',
  imports: [],
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.css'
})
export class ImagemComponent {

  imagemBiscoito = "biscoito-0.png"

  @Input() clip: boolean = false;

}
