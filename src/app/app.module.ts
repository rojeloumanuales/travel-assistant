import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListingComponent } from './listing/listing.component';
import { ButtonsModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
// Custom Import
import { AddformComponent } from './addform/addform.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule, MatRadioModule, MatFormFieldModule, MatCardModule, MatButtonModule, MatOptionModule, MatSelectModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';


import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        AddformComponent,
        NavbarComponent,
        DashBoardComponent,
        LoginComponent,
        ListingComponent
    ],
    imports: [
        BrowserAnimationsModule,
        MatToolbarModule,
        MatCardModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule,
        ReactiveFormsModule,
        AlertModule.forRoot(),
        MatRadioModule,
        FormsModule,
        MatListModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        MatInputModule,
        ReactiveFormsModule,
        AlertModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
