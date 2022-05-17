import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    // o stylo é um array, vc pode passar mais de um estilo por componente, declara entre []  
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    // para que uma variavel receba um valor de outro componente é necessario usar o @input
    @Input()
    rating: number = 0;
    // ajustar o tamanho da div conforme a qtdade de estrelas
    starWidth: number;
    ngOnChanges(): void {
        // essa proporcao calcula o tamanho da div para que a largura mostre somente o numero exato de estrelas
        // a proporcao pode ser 74/5 ou 94/5 vezes o valor do rating informado
        this.starWidth = this.rating * 74 / 5;
    }
}