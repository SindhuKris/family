import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form.component';




const route:Routes =[
  { path:'', 
  component: FormComponent}
  ];

@NgModule({
  declarations: [
    FormComponent
  ],
  

  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]

})



export class FormModule { }
