import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TodoListComponent } from './todo-list.component';
import { TodoService } from './todo.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,                               
    ReactiveFormsModule 
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
