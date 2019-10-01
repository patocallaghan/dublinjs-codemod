# dublinjs-codemod


A collection of codemod's for dublinjs-codemod.

## Usage

To run a specific codemod from this project, you would run the following:

```
npx dublinjs-codemod <TRANSFORM NAME> path/of/files/ or/some**/*glob.js

# or

yarn global add dublinjs-codemod
dublinjs-codemod <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Transforms

<!--TRANSFORMS_START-->
* [bind-to-arrow](transforms/bind-to-arrow/README.md)
<!--TRANSFORMS_END-->

## Contributing

### Installation

* clone the repo
* change into the repo directory
* `yarn`

### Running tests

* `yarn test`

### Update Documentation

* `yarn update-docs`