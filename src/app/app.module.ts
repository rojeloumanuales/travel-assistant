import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; 
// Custom Import
import { AddformComponent } from './addform/addform.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule, MatFormFieldModule, MatCardModule, MatButtonModule, MatOptionModule, MatSelectModule, MatInputModule } from '@angular/material';

import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddformComponent,
    NavbarComponent,
    DashBoardComponent,
    LoginComponent
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
    MatCheckboxModule
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatOptionModule, 
    MatSelectModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
