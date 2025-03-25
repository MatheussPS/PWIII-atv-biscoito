// Matheus Pinter e Paulo Sergio

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-frases',
  imports: [],
  templateUrl: './frases.component.html',
  styleUrl: './frases.component.css'
})
export class FrasesComponent {

  @Output() resultado = new EventEmitter();

  frases = ["A vida trará coisas boas se tiveres paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "Gente todo dia arruma os cabelos, por que não o coração?",
    "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
    "A juventude não é uma época da vida, é um estado de espírito.",
    "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos."
  ]

  @Output() emitir = new EventEmitter();

  @Input() isBlock:boolean = false;

  @Input() fraseBiscoito: string = this.frases[this.retornaInteiro()]

  retornaInteiro(){
    return Math.floor(Math.random() * 10)


  }


}
