import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error-404/error-404.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        // rotas nativas - sem nada, entao ele direciona para o inicio da aplicacao
        // rota raiz do projeto redireciona para a rota de courses
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        // aqui nos dizemos a qual componente esta vinculada a rota
        path: 'courses', component: CourseListComponent
      },
      {
        // outra rota nativa é o ** - que é o 404, nao encontrou
        // rota de erro
        path: '**', component: Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
