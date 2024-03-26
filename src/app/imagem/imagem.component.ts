import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.css']
})
export class ImagemComponent {
  @Input() imagemUrl: string = "../../assets/biscoito.png";
}

