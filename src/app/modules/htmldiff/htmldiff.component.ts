import { AfterViewInit, Component, ElementRef, ViewChild, Input } from '@angular/core';
import HtmlDiff from 'htmldiff-js';

@Component({
  selector: 'app-htmldiff',
  templateUrl: './htmldiff.component.html',
  styleUrls: ['./htmldiff.component.css']
})
export class HtmldiffComponent implements AfterViewInit {

  @Input() html1: any;
  @Input() html2: any;
  htmlValue: any;

  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.htmlValue = HtmlDiff.execute(this.html1, this.html2);
    }, 10);

  }
}
