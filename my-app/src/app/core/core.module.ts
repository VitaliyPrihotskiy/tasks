import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';



@NgModule({
  declarations: [
    MainPageComponent,
    LoginComponent,
    NewCourseComponent,
    CoursesComponent,
    CourseComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MainPageComponent,
    LoginComponent,
    NewCourseComponent,
    CoursesComponent,
    CourseComponent,
  ]
})
export class CoreModule { }
