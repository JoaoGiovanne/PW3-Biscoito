import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-biscoito',
  templateUrl: './biscoito.component.html',
  styleUrls: ['./biscoito.component.css']
})
export class BiscoitoComponent {
  ImagemUrlBiscoito: string = "../../assets/biscoito.png"
  ObterImg(evento: any){
    this.ImagemUrlBiscoito = evento.imagem;
  }
  ReiniciarImg(evento: any){
    this.ImagemUrlBiscoito = evento.restart;
  }
}

