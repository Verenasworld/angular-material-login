import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

interface ownprefix{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.scss']
})
export class RegistrationformComponent implements OnInit {
  prefixs: ownprefix[] = [
    {value: '+43', viewValue: '+43'},
    {value: '+49', viewValue: '+49'},
    {value: '+41', viewValue: '+41'}
  ];
  constructor(private fb: FormBuilder) {
  }

  registaForm: FormGroup = this.fb.group(
    {
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      sname: '',
      address: '',
      phone: new FormControl ('', [Validators.pattern('[0-9]{10}')]),
      prefix: ''
    }
  );
  ngOnInit(): void {
  }

  saveForm() {
    console.log(this.registaForm.value);
  }
}
