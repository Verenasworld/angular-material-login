import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {LoginComponent} from "./component/login/login.component";
import {RegistrationformComponent} from "./component/registrationform/registrationform.component";
import {PasswordresetComponent} from "./component/passwordreset/passwordreset.component";

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'regista',
        component: RegistrationformComponent
      },
      {
        path: 'reset',
        component: PasswordresetComponent
      }
      ]
  },
  // {
  //   path:
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
