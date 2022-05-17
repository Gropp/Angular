import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Component } from "src/app/core/component/error-404/error-404.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";

// pasta de componentes mais pesados da aplicacao
@NgModule({
    declarations: [
        NavBarComponent,
        Error404Component
    ],
    imports: [
        RouterModule.forChild ([
            {
                // outra rota nativa é o ** - que é o 404, nao encontrou
                // rota de erro
                path: '**', component: Error404Component
            }
        ])
    ],
    exports: [
        NavBarComponent
    ]
})
export class CoreModule {

}