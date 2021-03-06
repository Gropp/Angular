import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./course";

// classes de serviço nao devem ter variaveis que sejam alteradas em outros metodos
// sempre chamar algum metodo ou usar constantes

// elege a classe como injetora de dependencias
// vai ser carregado pelo root
@Injectable ({
    providedIn: 'root'
})

// classe que retorna os "servicos" desse componente
export class CourseService {

    // criamos uma variavel para dar o caminho do servidor
    // informacao do arquivo serve.js
    private courseUrl: string = 'http://localhost:3100/api/courses';
    // no construtor vamos fazer a injecao do http
    constructor(private httpClient: HttpClient) {}

    // funcao carrega todo o array e o retorna todos os cursos
    // ele fica observando a requisicao do tipo curso
    // observables sao assincronos, pois esperam o sucesso de algo externo para dar retorno
    retrieveAll(): Observable<Course[]>{
        // passa no <> o tipo da propriedade
        // tipo observable - faz a requisicao
        return this.httpClient.get<Course[]>(this.courseUrl);
        // return COURSES;
    }
    // funcao que carrega somente UM curso definido pelo id, conforme pusemos na tabela de rotas
    retrieveById(id: number): Observable<Course> {
        //agora o retorno vem do httpcliente
        return this.httpClient.get<Course>(`${this.courseUrl}/${id}`);
        //return COURSES.find((courseIterator: Course) => courseIterator.id === id);
        //find((courseIterator: Course) => courseIterator.id === id);
    }

    // metodo que salva as alteracoes ou um curso novo
    save(course: Course): Observable<Course> {// void{
        if(course.id) {
            // com o uso do httpclient essa rotina alterou
            // const index = COURSES.findIndex((courseIterator: Course ) => courseIterator.id === course.id);
            // COURSES[index] = course;
            // se tiver id - o curso existe - put (atualiza)
            return this.httpClient.put<Course>(`${this.courseUrl}/${course.id}`, course);
        } else {
            // se nao tiver id - o curso nao existe - post (cria um novo)
            return this.httpClient.post<Course>(`${this.courseUrl}`, course);
        }
    }
    // deletando um curso - funcão assincrona
    // a funcao nao retorna nada, somente apaga um registro
    deleteById(id: number): Observable<any>{
        // envia para o metodo concatenado a url e o id do curso
        return this.httpClient.delete<any>(`${this.courseUrl}/${id}`);
    }
}

// array das informacoes dos cursos
var COURSES: Course[] = [
    {
        id: 1,
        name: 'Angular: CLI',
        releaseDate: 'November 2, 2019',
        description: 'Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.',
        duration: 120,
        code: 'XLF-1212',
        rating: 3,
        price: 12.99,
        imageUrl: '/assets/images/cli.png',
    },
    {
        id: 2,
        name: 'Angular: Forms',
        releaseDate: 'November 4, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.',
        duration: 80,
        code: 'DWQ-3412',
        rating: 3.5,
        price: 24.99,
        imageUrl: '/assets/images/forms.png',
    },
    {
        id: 3,
        name: 'Angular: HTTP',
        releaseDate: 'November 8, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.',
        duration: 80,
        code: 'QPL-0913',
        rating: 4.0,
        price: 36.99,
        imageUrl: '/assets/images/http.png',
    },
    {
        id: 4,
        name: 'Angular: Router',
        releaseDate: 'November 16, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.',
        duration: 80,
        code: 'OHP-1095',
        rating: 4.5,
        price: 46.99,
        imageUrl: '/assets/images/router.png',
    },
    {
        id: 5,
        name: 'Angular: Animations',
        releaseDate: 'November 25, 2019',
        description: 'Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.',
        duration: 80,
        code: 'PWY-9381',
        rating: 5,
        price: 56.99,
        imageUrl: '/assets/images/animations.png',
    }
];