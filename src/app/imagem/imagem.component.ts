import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.css']
})
export class ImagemComponent {
  @Output() imagemUrl: string = "";
  @Input() tipo: string = "";

  ngOnInit() {
    this.escolhaImg();
  }

  escolhaImg() {
    switch (this.tipo) {
      case 'aberto':
        this.imagemUrl = "../../assets/biscoito.png";
        break;
      case 'fechado':
        this.imagemUrl = "../../assets/biscoito-quebrado.png";
        break;
      default:
        this.imagemUrl = "";
    }
  }

}

