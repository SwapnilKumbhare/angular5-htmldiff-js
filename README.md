# Angular5HtmldiffJs

This project is a Wrapper Angular5 plugin for htmldiff-js (https://www.npmjs.com/package/htmldiff-js)

Usage
-----

#### Install ####

npm install angular5-htmldiff-js --save

#### Html ####

```html
<html>
<body>
    <div id="oldHtml">
        <p>Some <em>old</em> html here</p>
    </div>

    <div id="newHtml">
        <p>Some <b>new</b> html goes here</p>
    </div>

    <div class="highlight-diff">
		<app-htmldiff [html1]="oldHtml.innerHTML" [html2]="newHtml.innerHTML"></app-htmldiff>
	</div>
</body>
</html>
```

#### Import ####

```javascript

import { HtmldiffModule } from './modules/htmldiff/htmldiff.module';

@NgModule({
  ...,
  imports: [
    ...,
    HtmldiffModule
  ],
  providers: [],
  bootstrap: [...]
})
```

#### Typescript ####

```javascript

ngOnInit(): void {
    this.oldHtml = document.getElementById('oldHtml');
    this.newHtml = document.getElementById('newHtml');
  }
```

#### CSS ####

```css
.highlight-diff ins {
    background-color: #ffff00;
}

.highlight-diff del {
    background-color: #edb3b3;
}
```
