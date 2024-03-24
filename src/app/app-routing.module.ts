import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RandomUserComponent } from './random-user/random-user.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'random-user', component: RandomUserComponent }
  //{path: '', redirectTo: 'CreateEmployee', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
