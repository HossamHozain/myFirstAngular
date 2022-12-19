import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { GetCoursesService } from './services/get-courses.service';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GetCoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
