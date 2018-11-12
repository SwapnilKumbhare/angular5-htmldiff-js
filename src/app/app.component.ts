import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  oldHtml: any;
  newHtml: any;
  showDiffFlg: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.showDiffFlg = false;
    this.oldHtml = document.getElementById('oldHtml');
    this.newHtml = document.getElementById('newHtml');
  }

  showDiff(): void {
    this.showDiffFlg = true;
  }
}
