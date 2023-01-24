import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  form!: FormGroup;

  constructor(
    public fc:FormBuilder,
  ){
    this.formCreate();
  }

  formCreate(){
    this.form = this.fc.group({
      name: ['', Validators.required],
      password: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      confirm_password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      email:['', [Validators.required, Validators.email]]
    })
  }
  
  submit(){

  }
}
