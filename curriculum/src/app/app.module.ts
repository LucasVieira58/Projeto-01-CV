import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { CVComponent } from './cv/cv.component';

@NgModule({
  declarations: [
    AppComponent,
    CurriculumComponent,
    CVComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
