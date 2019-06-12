import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


    ngOnInit(){
        console.log(JSON.parse(localStorage.getItem("kapil")))
    }
}
