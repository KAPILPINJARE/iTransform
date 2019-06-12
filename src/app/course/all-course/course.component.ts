import { Component, OnInit } from '@angular/core';
import { Courses } from '../course';
import { CourseService } from '../course.service';

@Component({
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit{
   
    courses: Courses[];
    constructor(private courseService: CourseService) {}

    ngOnInit(): void {
        

        this.courseService.findAllCourses().subscribe((data) => {
            this.courses = data;

        localStorage.setItem("course",JSON.stringify(data));
            console.log(data);
        });
    }
}
