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
    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) { }

    ngOnInit(): void {
        // joga para a propriedade da classe, uma 'foto' do valor do id neste instante
        // o ! diz que o objeto não é nulo
        // this.course = this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id'));
        // como agora a requisicao é http assincrono, tem que dar um subscribe
        this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')!).subscribe({
            // iguala o curso ao retorno do http
            next: course => this.course = course,
            error: err => console.log('Error', err)
        })
    }

    // chama no servico a funcao save
    // sempre que vc chamar a requisicao de um httpclinte, vc tem que sobscrever a funcao
    save(): void {
        this.courseService.save(this.course).subscribe({
            // callback functions =>
            next: course => console.log('save with sucess', course),
            error: err => console.log('Error', err)
        });
    }
}