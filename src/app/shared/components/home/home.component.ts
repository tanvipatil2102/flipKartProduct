import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  signInForm !: FormGroup;
  constructor(
    private _routes : Router
  ) { }

  ngOnInit(): void {
    this.formSetup()
    console.log(this.signInForm);
    
  }

  formSetup(){
    this.signInForm = new FormGroup({
      userName : new FormControl(null, [Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
      email : new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9-_.]+\\.[a-zA-Z]{2,100}$')])
    })
  }

  get f(){
    return this.signInForm.controls
  }

  onFormSubmit(){
    if(this.signInForm.valid){
      console.log(this.signInForm.value);
      this._routes.navigate(['products'])
    }
  }

}
