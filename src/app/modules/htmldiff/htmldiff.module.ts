import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmldiffComponent } from './htmldiff.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HtmldiffComponent],
  exports: [
    HtmldiffComponent
  ]
})
export class HtmldiffModule { }
