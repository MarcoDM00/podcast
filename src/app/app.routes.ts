import { Routes } from "@angular/router";
import { DefaultComponent } from "./Components/default/default.component";
import { ListaComponent } from "./Components/lista/lista.component";
import { PlayComponent } from "./Components/play/play.component";

export const AppRoutes : Routes = [
    {path: "", component: DefaultComponent},
    {path: "lista", component: ListaComponent},
    {path: "play/:id", component: PlayComponent}
];