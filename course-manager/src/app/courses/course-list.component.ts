import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course-service";

@Component({
    selector: 'app-course-list',
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

        // atribui a propriedade o metodo descrito na classe course-serivce
        this._courses = this.courseServices.retrieveAll();
        // iguala o filro aos cursos
        this.filteredCourses = this._courses;

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