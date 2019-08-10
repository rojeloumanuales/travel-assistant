import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {DashBoardComponent} from './dash-board/dash-board.component';

const routes: Routes = [
  { path: '', component: DashBoardComponent},
  { path: 'login', component: LoginComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
