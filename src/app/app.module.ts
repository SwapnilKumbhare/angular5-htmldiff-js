import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HtmldiffModule } from './modules/htmldiff/htmldiff.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HtmldiffModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
