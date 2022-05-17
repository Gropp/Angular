import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course-service";

@Component({
    // como configuramos Rotas, os selectors nao sao mais utilizados
    // selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent {
    _courses: Course[] = [];

    // define uma variavel local
    _filterBy: string;

    // variavel que vai guardar os cursos filtrados
    filteredCourses: Course[] = [];

    // com a injecao definida precisamos criar um construtor para chama-la
    constructor(private courseServices: CourseService){

    }

    ngOnInit(): void {

        // com o servico assincrono, ao iniciar chamamos a funcao criada logo abaixo
        this.retrieveAll();
        // atribui a propriedade o metodo descrito na classe course-serivce
        // como agora a requisicao é html essa linha da erro
        //this._courses = this.courseServices.retrieveAll();
        // iguala o filro aos cursos
        //this.filteredCourses = this._courses;

        // os valores serao injetados atraves da classe de servicos
        // entao esse array direto foi descartado
        // this.courses = [
        // {
        //     id: 1,
        //     name: 'Angular Forms',
        //     imageUrl: '/assets/images/forms.png',
        //     price: 99.99,
        //     code: 'XPS-8796',
        //     duration: 120,
        //     rating: 4.5,
        //     releaseDate: 'November, 2, 2019'
        // },
        // {
        //     id: 2,
        //     name: 'Angular HTTP',
        //     imageUrl: '/assets/images/http.png',
        //     price: 49.99,
        //     code: 'LKL-1094',
        //     duration: 80,
        //     rating: 4,
        //     releaseDate: 'December, 4, 2019'
        // }]
    }

    // com o uso do http cliente assincrono precisao reescrever a funcoes
    retrieveAll(): void {
        // o subscribe é por ser assincrono e o serviço é observable
        this.courseServices.retrieveAll().subscribe({
            // o courses é o retorno do get da funcao retrieveall
            // a callback function tem duas funcoes, next (sucesso) e error (falha)
            // em caso de sucesso next
            next: courses => {
                this._courses = courses;
                // como o servico e assincrono vc coloca o filtro dentro do bloco de sucesso de retorno para evitar que ele aja antes de ter o retorno
                this.filteredCourses = this._courses;
            },
            // em caso de falha error
            error: err => console.log('Error', err)
        })
    }

    // metodo para deletar um curso pelo Id - passa o id e o retorno é nulo
    deleteById(courseId: number): void {
        this.courseServices.deleteById(courseId).subscribe({
            // como delete nao tem retorno o next nao tem parametros
            // joga no console a mensagem de ok
            // recarrega a listagem - atualiza
            next:() => {
                console.log('Deleted with success');
                this.retrieveAll();
            },
            error: err => console.log('Error', err)
        })
    }
    // define no componente que lista os cursos a funcao filter chamada pelo ngModel
    // faz um setter do valor para a variavel local _filterBy
    set filter(value: string) {
        this._filterBy = value;
        // faz o filtro funcionar
        // iguala a variavel ao filtro, faz um iteracao, compara o nome (minusculo) para nao ter problema com case sensitive, se o indexof for maior que -1 ele coloca o valor no array
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase())> -1)
    }

    // faz um get para retornar o resultado do filtro
    get filter() {
        return this._filterBy;
    }
}