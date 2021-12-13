import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-formfield',
  templateUrl: './formfield.component.html',
  styleUrls: ['./formfield.component.css']
})
export class FormfieldComponent implements OnInit {
 
  userForm!: FormGroup;
  submitted = {};
  questions = [
    { type: "firstname", placeholder: "first name", description: "What is your first name ?", isHidden: false },
    { type: "lastname", placeholder: " last name", description: "What is your other names ?", isHidden: true },
    { type: "phone", placeholder: "phone number ", description: "phone number ?", isHidden: true },
    { type: "email", placeholder: " email", description: "What is your email ?", isHidden: true },
    { type: "gender", placeholder: " gender", description: "Gender?", isHidden: true },
    { type: "status", placeholder: "status", description: "Marital status ?", isHidden: true },
    { type: "loan", placeholder: "loan", description: "Purpose of the loan ?", isHidden: true },
    { type: "moneySpent", placeholder: "money spent", description: "How much will you spend on the initial contribution, EUR ?", isHidden: true },
    { type: "identity", placeholder: " identity", description: "Type of identity document?", isHidden: true },
    { type: "cob", placeholder: "country", description: "Country of birth?", isHidden: true },
    
  ]

  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void{ 
    this.userForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      status: ['', Validators.required],
      loan: ['', Validators.required],
      moneySpent: ['', Validators.required],
      identity: ['', Validators.required],
      cob: ['', Validators.required],
      //txtPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get getform() {
    return this.userForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.userForm.valid) {
      return;
    }
    //alert('SUCCESS' + JSON.stringify(this.userForm.value));
  }
 
}

