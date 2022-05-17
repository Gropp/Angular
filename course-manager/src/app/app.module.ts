import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
//import { StarComponent } from './star/star.component';
//import { ReplacePipe } from './pipe/replace.pipe';
//import { NavBarComponent } from './core/component/nav-bar/nav-bar.component';
//import { Error404Component } from './core/component/error-404/error-404.component';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/component/core.module';
//import { CourseInfoComponent } from './courses/course-info.component';

@NgModule({
  declarations: [
    AppComponent,
    //importado no modulo novo da aplicacao
    //CourseListComponent,
    //StarComponent,
    //importado no course module
    //ReplacePipe,
    //tira do declaration e passa a importar o CoreModule abaixo
    //NavBarComponent,
    //Error404Component,
    //importado no modulo novo da aplicacao
    //CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    //FormsModule,
    CourseModule,
    // modulo para requisicao HTTP
    HttpClientModule,
    // importacao do COREMODULE
    CoreModule,
    // propriedade de rotas de moodulos do sistema child
    RouterModule,
    // propriedade de rotas passando pelo root, raiz do sistema
    RouterModule.forRoot([
      // com a criacao do modules da aplicacao, as rotas que nao sao default vao para o arquivo de rotas da aplicacao filha
      {
        // rotas nativas - sem nada, entao ele direciona para o inicio da aplicacao
        // rota raiz do projeto redireciona para a rota de courses
        path: '', redirectTo: 'courses', pathMatch: 'full'
      }//,
      // {
      //   // aqui nos dizemos a qual componente esta vinculada a rota
      //   path: 'courses', component: CourseListComponent
      // },
      //   // rota para o componente course-info
      //   // essa rota recebe um argumento do componente, entao tem que identificar o argumento que é o id
      // {
      //   path: 'courses/info/:id', component: CourseInfoComponent
      // },
      // o tratamento de erro vai para o componente core - pois ele trata os erros de toda a aplicacao
      // {
      //   // outra rota nativa é o ** - que é o 404, nao encontrou
      //   // rota de erro
      //   path: '**', component: Error404Component
      // }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
