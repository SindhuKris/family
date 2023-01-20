import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public parents=[{name:"rahul"}, {name:"hari"}, {name:"veena"},{name:"raj"}];
  public sisters=[{name:"meena"}, {name:"liya"}, {name:"rose"}, {name:"linda"}];
  public brothers=[{name:"logan"}, {name:"dhyan"}, {name:"dheeraj"}, {name:"vijay"}];
  public all=[...this.parents, ...this.sisters, ...this.brothers];

  public ShowType= "";

  getShowType(type:string){
    this.ShowType = type;
  }
  
  
}
