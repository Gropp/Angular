// segregando as classes em modulos

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ReplacePipe } from "../shared/pipe/replace.pipe";
import { StarComponent } from "../shared/component/star/star.component";
import { StarModule } from "../shared/component/star/star.module";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";
import { AppPipeModule } from "../shared/pipe/app-pipe.module";

@NgModule({
    declarations: [
        // os modulos que existem no aplicativo
        CourseInfoComponent,
        CourseListComponent,
    ], 
    imports: [
        // importa os pipes e metodos comuns do Angular
        CommonModule,
        // importa o pipe criado por nos
        AppPipeModule,
        // importa o modulo star
        StarModule,
        // importar os Forms do html
        FormsModule,
        // como estamos chamando as rotas em um modulo do app ele é do tipo child
        RouterModule.forChild ([
            {
            // aqui nos dizemos a qual componente esta vinculada a rota
                path: 'courses', component: CourseListComponent
            },
              // rota para o componente course-info
              // essa rota recebe um argumento do componente, entao tem que identificar o argumento que é o id
            {
                path: 'courses/info/:id', component: CourseInfoComponent
            }
        ])
    ]
})
export class CourseModule {

}