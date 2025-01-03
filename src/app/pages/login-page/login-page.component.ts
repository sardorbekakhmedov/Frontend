import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [
    ReactiveFormsModule
  ],
  standalone: true,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  form:FormGroup = new FormGroup({
    username: new FormControl(null),
    password: new FormControl(null)
  })

  onSubmit() {
    console.log(this.form.value)
  }
}
