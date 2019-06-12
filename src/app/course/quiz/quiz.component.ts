import { Component, OnInit } from '@angular/core';
import { Quiz } from '../course';
import { CourseService } from '../course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl:"quiz.component.html"
})
export class QuizComponent implements OnInit{
    quizArray:Quiz[];
    quiz:Quiz;
    choose:string;

    constructor(private courseService: CourseService,
        private route: ActivatedRoute) {}

    ngOnInit(){
        this.courseService.getQuiz().subscribe((data) => {
            this.quizArray = data;
        })


        this.route.paramMap.subscribe((map) => {
            let index = Number(map.get("quizIndex"));
            console.log(index)
            this.courseService.getQuiz().subscribe((data) => {
                this.quizArray = data;
                this.quiz = this.quizArray[index];
                console.log(this.quiz)
            })
        })


    }
    
}