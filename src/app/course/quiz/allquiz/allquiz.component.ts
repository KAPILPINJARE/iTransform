import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../course';
import { CourseService } from '../../course.service';

@Component({
    templateUrl:"allquiz.component.html"
})
export class AllQuizComponent implements OnInit{
    quiz:Quiz[];
   
    constructor(private courseService: CourseService) {}

    ngOnInit(){
        this.courseService.getQuiz().subscribe((data) => {
            this.quiz = data;
        })
    }
}