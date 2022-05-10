import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit{
    
    // a variavel é atribuida a uma rota inicialmente nula
    courseId: number | string | null;

    // atraves do construtor injetamos a rota que esta ativa
    constructor(private activatedRouter: ActivatedRoute) {}

    ngOnInit(): void {
        // joga para a propriedade da classe, uma 'foto' do valor do id neste instante
        this.courseId = this.activatedRouter.snapshot.paramMap.get('id');
    }
}