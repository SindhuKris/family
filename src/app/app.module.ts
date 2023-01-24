import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormModule } from './form/form.module';

const route:Routes =[
  {
    path:'form',
     loadChildren: () => import('./form/form.module').then(m => m.FormModule)

  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
