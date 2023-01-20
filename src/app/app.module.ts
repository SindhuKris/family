import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormModule } from './form/form.module';

const route:Routes =[
  { path:'form',
   component: FormModule}
  ];

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(route)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
