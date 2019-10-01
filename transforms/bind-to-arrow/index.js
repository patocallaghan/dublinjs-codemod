const { getParser } = require('codemod-cli').jscodeshift;
// const { getOptions } = require('codemod-cli');

module.exports = function transformer(file, api) {
  const j = getParser(api);
  // const options = getOptions();

  return j(file.source)
    .find(j.CallExpression, {
      callee: {
        object: {
          type: 'FunctionExpression',
        },
        property: {
          name: 'bind',
        },
      },
    })
    .forEach(path => {
      if (path.value.arguments.length && path.value.arguments[0].type === 'ThisExpression') {
        j(path).replaceWith(j.arrowFunctionExpression([], path.value.callee.object.body));
      }
    })
    .toSource();
};
