import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: DashBoardComponent,
    },
    { path: 'login', component: LoginComponent, },
    { path: 'park-list', component: ListingComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
