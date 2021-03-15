import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.component.html',
  styleUrls: ['./passwordreset.component.scss']
})
export class PasswordresetComponent implements OnInit {

  constructor( private fb: FormBuilder) { }

  resetForm: FormGroup = this.fb.group(
    {
      email: new FormControl('',[Validators.required, Validators.email])
    }
  );

  ngOnInit(): void {
  }
  newPassword(){
    if (!this.resetForm.valid){
      return;
    }
    console.log(this.resetForm.value);
  }
}
