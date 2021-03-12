import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validator, Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: `app-login`,
  templateUrl: './login.component.html',
  styleUrls: ['./login.style.scss']
})
export class LoginComponent implements OnInit {
  hide = false;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): any {
  }

  loginForm: FormGroup = this.fb.group(
    {
      email: new FormControl('', [Validators.required, Validators.email ]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    }
  );
  onLogin(){
    console.log('it works ');
  }
}
