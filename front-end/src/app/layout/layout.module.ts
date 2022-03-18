import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';




@NgModule({
  declarations: [ //등록 
   HeaderComponent,
   FooterComponent,
  ],

  exports:[
    HeaderComponent,
    FooterComponent,
  ],

  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
