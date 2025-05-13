import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { MaterialModule } from './shared/material/material.module';
import { TasksInputComponent } from './components/tasks/tasks-input/tasks-input.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TasksComponent,
    TasksInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
