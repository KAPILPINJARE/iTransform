import { Routes } from '@angular/router';
import { CourseComponent } from './all-course/course.component';
import { ChaptersComponent } from './chapters/chapters.component';
import { QuizComponent } from './quiz/quiz.component';
import { AllQuizComponent } from './quiz/allquiz/allquiz.component';
import { ModuleComponent } from './module/module.component';

export const CourseRoute: Routes = [
    {path : 'courses', component: CourseComponent},
    {path : 'chapters/:courseId', component: ChaptersComponent,
        children:[
            {path: "modules/:chapterId/:moduleId", component: ModuleComponent}
        ]},
    {path : 'allquiz', component: AllQuizComponent},
    {path : 'quiz/:quizIndex', component: QuizComponent},

];
