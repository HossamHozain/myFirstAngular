import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetCoursesService {
  coursesList =["course1", "course2","course3"];

 getCourses(){
  return this.coursesList
 }
  constructor() { }
}
