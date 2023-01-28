import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form!: FormGroup;
  submitted = false;

  constructor(
    public fc:FormBuilder,
    public router: Router
  ){
    
  }

  ngOnInit(){
    this.form = this.fc.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      acceptTerms: [false, Validators.requiredTrue]
    
    });
  }

  
  

  Submit(){
   this.submitted = true;
   this.router.navigate(['/login'])
  }

 
}
