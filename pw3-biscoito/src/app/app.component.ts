import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrasesComponent } from './frases/frases.component';
import { ImagemComponent } from './imagem/imagem.component';
import { BotoesComponent } from "./botoes/botoes.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FrasesComponent, ImagemComponent, BotoesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "pw3-biscoito";

  estadoBiscoito: boolean = false;
  frase: string = ''

  quebrar(value:boolean) {
    if(value == this.estadoBiscoito) {this.estadoBiscoito = this.estadoBiscoito; return;}

    this.estadoBiscoito = value


  }

  atualizar(value:string){
   this.frase = value;
  }


}
