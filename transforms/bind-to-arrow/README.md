# bind-to-arrow


## Usage

```
npx dublinjs-codemod bind-to-arrow path/of/files/ or/some**/*glob.js

# or

yarn global add dublinjs-codemod
dublinjs-codemod bind-to-arrow path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [basic](#basic)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="basic">**basic**</a>

**Input** (<small>[basic.input.js](transforms/bind-to-arrow/__testfixtures__/basic.input.js)</small>):
```js
const obj = {
  id: 42,
  counter: function counter() {
    setTimeout(
      function() {
        console.log(this.id);
      }.bind(this),
      1000
    );
  },
};

```

**Output** (<small>[basic.output.js](transforms/bind-to-arrow/__testfixtures__/basic.output.js)</small>):
```js
const obj = {
  id: 42,
  counter: function counter() {
    setTimeout(
      () => {
        console.log(this.id);
      },
      1000
    );
  },
};

```
<!--FIXTURES_CONTENT_END-->