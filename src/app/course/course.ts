export class Courses{
    courseName:string;
    courseId:number;
    courseChapter:CourseChapter[];
}

export class CourseChapter{
    chapterName:string;
    chapterId:number;
    chapterModule:ChapterModule[];
}

export class ChapterModule{
    moduleName:string;
    moduleId:number;
    moduleDetails:string;
    isComplete:boolean;
}

export class Quiz{
    quizId:number;
    question:string;
    option1:string;
    option2:string;
    option3:string;
    option4:string;
    answer:string;
}