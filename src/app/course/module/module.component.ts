import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Courses, CourseChapter, ChapterModule } from '../course';


@Component({
    templateUrl:"module.component.html"
})
export class ModuleComponent implements OnInit {

    progress=0;
    count:number;

    constructor(private courseService: CourseService,
        private route: ActivatedRoute,
        private router:Router) { }

        actualCourse:Courses;
        course:Courses;
        chapters:CourseChapter[]
        modules:ChapterModule[];
        module:ChapterModule;
        courseId:number;
        chapterId:number;
        moduleId:number;

        array: Array<String> = [];
        value:string;
        length=0;
        courseForSessionStorage:Courses;

        moduleCount=0;
     
ngOnInit(): void {   
    
    this.courseForSessionStorage = JSON.parse(localStorage.getItem("kapil"));
    
    this.route.paramMap.subscribe((map) =>{
    this.chapterId = Number(map.get("chapterId"));
    this.moduleId = Number(map.get("moduleId"));

   console.log(this.chapterId+""+this.moduleId)
   this.courseService.getCourseById().subscribe((data) =>{
    this.actualCourse = data;

    if(this.courseForSessionStorage == null){
        this.course = data;
    }else{
        this.course = this.courseForSessionStorage;
    }
    
    
        this.courseId = this.course.courseId;
        this.chapters = this.course.courseChapter;    
        for(let i =0;i<this.chapters.length;i++){
           this.modules = this.chapters[i].chapterModule;
           for(let j = 0;j<this.modules.length;j++){
                this.value = i + "" + j; 

                if(this.length == 0){
                    this.array.push(i + "" + j);
                }
           }
        }
        this.length = this.array.length;
        console.log(this.array)
        console.log(this.course)
        this.module = this.chapters[this.chapterId].chapterModule[this.moduleId];
        console.log(this.module)

   })
})


if(this.courseForSessionStorage != null){
        //for progress bar
    let courseForProgress = JSON.parse(localStorage.getItem("kapil"))
    let chapterForProgress = courseForProgress.courseChapter;

    console.log(courseForProgress)
    console.log(chapterForProgress.length)
    this.count=0;
    for(let i = 0;i<chapterForProgress.length;i++){
        for(let j=0;j<chapterForProgress[i].chapterModule.length;j++){
            console.log(chapterForProgress[i].chapterModule[j].isComplete)
            this.moduleCount++
            if(chapterForProgress[i].chapterModule[j].isComplete){
                this.count++
                console.log(this.count)
            }
        }
    }
    console.log(this.moduleCount)
    this.progress = Number((this.count/this.moduleCount)*100);
    console.log(this.count)
}
    }

    next(){

        this.module.isComplete = true;

        if(this.courseForSessionStorage == null){
            localStorage.setItem("kapil",JSON.stringify(this.actualCourse))
        }else{
            localStorage.setItem("kapil",JSON.stringify(this.course))
        }

        
        console.log(JSON.parse(localStorage.getItem("kapil")))
            //for progress bar
            let courseForProgress = JSON.parse(localStorage.getItem("kapil"))
            let chapterForProgress = courseForProgress.courseChapter;
            
            this.count=0;
            console.log(courseForProgress)
            console.log(chapterForProgress.length)
            for(let i = 0;i<chapterForProgress.length;i++){
                for(let j=0;j<chapterForProgress[i].chapterModule.length;j++){
                    console.log(chapterForProgress[i].chapterModule[j].isComplete)
                    if(chapterForProgress[i].chapterModule[j].isComplete){
                        this.count++
                       console.log(this.count)
                    }
                }
            }
            console.log(this.moduleCount)
            console.log(this.count)
            this.progress = Number((this.count/this.moduleCount)*100);
        


        let value = this.chapterId +"" + this.moduleId; 
        for(let i=0;i< this.array.length;i++){
            if(value == this.array[i] && i!=this.array.length-1){
                let got = this.array[i+1];
                console.log(got)
                this.router.navigate(["chapters/"+ this.courseId+"/modules/" + Number(got.charAt(0)) +"/" + Number(got.charAt(1))]);
            }    
        }
    }

    previous(){

        localStorage.removeItem("kapil")
        let value = this.chapterId +"" + this.moduleId; 
        for(let i=this.array.length-1;i>=0 ;i--){
            if(value == this.array[i] && i!=0){
                let got = this.array[i-1];
                console.log(got)
                this.router.navigate(["chapters/"+ this.courseId+"/modules/" + Number(got.charAt(0)) +"/" + Number(got.charAt(1))]);
            }    
        }
    }

}