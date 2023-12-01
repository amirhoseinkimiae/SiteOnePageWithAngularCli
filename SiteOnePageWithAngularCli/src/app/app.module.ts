import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from 'src/about/about.component';
import { HomeComponent } from 'src/home/home.component';
import { LearnComponent } from 'src/learn/learn.component';
import { MainComponent } from 'src/main/main.component';
import { ContactComponent } from 'src/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    LearnComponent,
    MainComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
