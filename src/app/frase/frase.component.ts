import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-frase',
  templateUrl: './frase.component.html',
  styleUrls: ['./frase.component.css'],
})
export class FraseComponent {
  @Input() frases: Array<Object> = [
    'As mais lindas palavras de amor são ditas no silêncio de um olhar',
    'O amor construído sobre a beleza morre com a beleza',
    'A beleza do espírito causa admiração; a da alma, estima; e a do corpo, amor',
    'O amor, para ser belo, não precisa de ser eterno',
    'O amor e a arte não abraçam o que é belo, mas o que justamente com esse abraço se torna belo',
    'É um amor pobre aquele que se pode medir',
    'Um único momento de beleza e amor justifica a vida inteira',
    'O amor só é lindo quando encontramos alguém que nos transforme no melhor que podemos ser',
    'Me cobrou um amor que, no momento, eu só posso sentir por mim... Meu amor-próprio é tão grande que não cabe você',
    'E um amor arruinado, ao ser reconstruído, cresce muito mais belo, sólido e maior',
  ];

  @Input() min: number = 0;
  @Input() max: number = 9;

  valor = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
}
