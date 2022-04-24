import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChipsComponent } from './chips/chips.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ChipEditorComponent } from './chip-editor/chip-editor.component';


const routes: Routes = [{
  path: "chip",
  component: ChipsComponent,
}, {
  path: "chip/editor/:id",
  component: ChipEditorComponent,
}, {
  path: "home",
  component: HomeComponent,
}, {
  path: "login",
  component: LoginComponent,
}, {
  path: "register",
  component: RegisterComponent,
}, {
  path: '**',
  redirectTo: '/home'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
