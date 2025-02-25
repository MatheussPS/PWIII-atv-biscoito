import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrasesComponent } from './frases/frases.component';
import { ImagemComponent } from './imagem/imagem.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FrasesComponent, ImagemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "pw3-biscoito";

    
}
