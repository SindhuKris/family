import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form.component';
import { LoginModule } from '../login/login.module';
import {  ReactiveFormsModule } from '@angular/forms';





const route:Routes =[
  {
    path:'',
    component: FormComponent
  }
  ];
  
  
@NgModule({
  declarations: [
    FormComponent,
  ],
  

  imports: [
    CommonModule,
    RouterModule.forChild(route),
    ReactiveFormsModule,
  ]

})



export class FormModule { }
