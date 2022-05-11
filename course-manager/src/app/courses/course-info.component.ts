import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course-service";

@Component({
    templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit {
    
    // a variavel é atribuida a uma rota inicialmente nula
    course: Course;

    // atraves do construtor injetamos a rota que esta ativa
    constructor(private activatedRouter: ActivatedRoute, private courseService: CourseService) { }

    ngOnInit(): void {
        // joga para a propriedade da classe, uma 'foto' do valor do id neste instante
        // o ! diz que o objeto não é nulo
        this.course = this.courseService.retrieveById(+this.activatedRouter.snapshot.paramMap.get('id')!);
    }
}