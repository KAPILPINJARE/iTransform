import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { registrationRoute } from './registration.route';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        RegistrationComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        CommonModule,
        RouterModule.forChild(registrationRoute)
    ],
    exports: [
        RegistrationComponent
    ]
})
export class RegistrationModule {
}
