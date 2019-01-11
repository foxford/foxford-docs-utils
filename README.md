| Command                      | Description                |
|-----------------------------:|:---------------------------|
| `npm test`                  | Run eslint check            |

## Getting started

1. `npm i`

## Usage

Inject ***styleguideConfigMixin*** into your `styleguidist.config.js` to get all the documentation components and styles.

```js
const { styleguideConfigMixin } = require('@foxford/foxford-docs-utils')

module.exports = {
  ...styleguideConfigMixin,
  /* If you want to have favicon, logo and images */
  assetsDir: resolve(__dirname, 'node_modules/@foxford/docs-utils/assets'),
  /** Your config here */
}
```

## Important documents

- [React-styleguidist](https://react-styleguidist.js.org/docs/getting-started)
- [Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
