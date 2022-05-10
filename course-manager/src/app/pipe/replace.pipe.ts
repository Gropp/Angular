// criacao de um pipe customizado
import { Pipe, PipeTransform } from "@angular/core";

// decorator do angular para dizer que essa classe é um pipe
@Pipe({
    name: 'replace'
})

// a classe vai herdar a classe default de pipes do angular
export class  ReplacePipe implements PipeTransform{
    
    // recebe a variavel, o caractere que tem e o que quer por no lugar
    transform(value: string, char: string, valueToReplace: string) {
        return value.replace(char, valueToReplace);
    }    
}