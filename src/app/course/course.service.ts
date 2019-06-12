import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Quiz, Courses } from './course';
import { HttpClient,HttpHeaders  } from '@angular/common/http';

@Injectable()
export class CourseService{

    baseUrlForQuiz ="/assets/jsondata/quiz.json";
   // baseUrl="/src/api/course0.json";
    
    constructor(private http: HttpClient) {}
    
    getQuiz(): Observable<Quiz[]> {
        return this.http.get<Quiz[]>(this.baseUrlForQuiz);
    }

    findAllCourses(): Observable<Courses[]> {
        return this.http.get<Courses[]>("/assets/jsondata/course0.json");
    }

    getCourseById():Observable<Courses>{
        return this.http.get<Courses>("/assets/jsondata/corejava.json");
    }

}