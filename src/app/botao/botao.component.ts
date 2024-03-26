import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent {
  @Input() exibir: boolean = true;
  @Input() ImgBiscoito: string = ''
  @Output() resultado = new EventEmitter
  @Output() reiniciar = new EventEmitter

  trocarImg(){
    this.ImgBiscoito = '../../assets/biscoito-quebrado.png'
    this.resultado.emit({imagem: this.ImgBiscoito})
  }

  reiniciarBiscoito(){
    this.ImgBiscoito = '../../assets/biscoito.png'
    this.reiniciar.emit({restart: this.ImgBiscoito})
  }
}
