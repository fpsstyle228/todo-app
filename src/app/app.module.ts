import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponentComponent } from './todo-component/todo-component.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TextButtonComponent } from './text-button/text-button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { AppChecboxComponent } from './app-checbox/app-checbox.component';
import {ToDoService} from './to-do-service.service';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { TopBarComponent } from './top-bar/top-bar.component';
import { UserComponent } from './user/user.component';
import { AuthComponent } from './auth/auth.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import {UserService} from './user.service';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AuthGuard} from './auth.guard';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule
} from '@angular/material';
import { ResetEmailPopUpComponent } from './reset-email-pop-up/reset-email-pop-up.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponentComponent,
    TodoInputComponent,
    TodoListComponent,
    TextButtonComponent,
    IconButtonComponent,
    AppChecboxComponent,
    TopBarComponent,
    UserComponent,
    AuthComponent,
    SingUpComponent,
    ResetEmailPopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatDialogModule
  ],
  entryComponents: [ResetEmailPopUpComponent],
  providers: [ToDoService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
