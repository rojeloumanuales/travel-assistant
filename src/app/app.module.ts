import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule, MatCardModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { ListingComponent } from './listing/listing.component';
import { ButtonsModule } from 'ngx-bootstrap';

@NgModule({
    declarations: [
        AppComponent,
        ListingComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatListModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        ButtonsModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
