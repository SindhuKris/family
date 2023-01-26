import { Component } from '@angular/core';
import { FormBuilder, MinLengthValidator, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public ShowType= "";

  getShowType(type:string){
    this.ShowType = type;
  }
  
  
}
