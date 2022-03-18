import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { TimeDisplayComponent } from './section/stopwatch/time-display/time-display.component';
import { ButtonsComponent } from './section/stopwatch/buttons/buttons.component';
import { LayoutModule } from './layout/layout.module';
import { SectionModule } from './section/section.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    SectionModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
