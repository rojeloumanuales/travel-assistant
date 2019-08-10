import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddformComponent } from './addform/addform.component';
import { LoginComponent } from './login/login.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: 'add-form', component: AddformComponent, canActivate: [AuthGuard] },
  { path: '', component: DashBoardComponent },
  { path: 'login', component: LoginComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
