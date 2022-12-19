import { Component, OnInit, } from '@angular/core';
import { GetCoursesService } from '../services/get-courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title="list of courses";
  courses:string[]

  constructor(private coursesService : GetCoursesService) {
    this.courses=coursesService.getCourses();
  }

 getTitle(){
    return this.title
  }
  onSave($event:any){
    console.log($event.type)
  }

  ngOnInit(): void {
  }
}
