import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponentComponent } from './todo-component/todo-component.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule} from "@angular/forms";
import { TextButtonComponent } from './text-button/text-button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { AppChecboxComponent } from './app-checbox/app-checbox.component';
import {ToDoService} from "./to-do-service.service";


@NgModule({
  declarations: [
    AppComponent,
    TodoComponentComponent,
    TodoInputComponent,
    TodoListComponent,
    TextButtonComponent,
    IconButtonComponent,
    AppChecboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
