import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {SingUpComponent} from "./sing-up/sing-up.component";
import {AuthGuard} from "./auth.guard";
import {TodoComponentComponent} from "./todo-component/todo-component.component";

const routes: Routes = [
  {path:'', redirectTo: 'auth',  pathMatch: 'full'},
  { path: 'toDoList', component: TodoComponentComponent,canActivate: [AuthGuard] },
  { path: 'auth', component: AuthComponent },
  {path: 'signUp', component: SingUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
