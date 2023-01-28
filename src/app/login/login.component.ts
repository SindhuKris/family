import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {

  login!: FormGroup;
  submitted = false;

  constructor(
    public lc:FormBuilder,
  ){
    
  }

  ngOnInit(){
    this.login = this.lc.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    });
  }


  Submit(){

    this.submitted = true;
  }
}
