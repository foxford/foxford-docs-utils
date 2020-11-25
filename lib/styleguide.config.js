const { resolve } = require('path')
const fs = require('fs')

module.exports = {
  getExampleFilename (componentPath) {
    return componentPath.replace(/\.jsx?$/, '.md')
  },
  template: {
    favicon: 'images/favicon-192.png',
  },
  require: [
    '@foxford/docs-utils/assets/styles/font.sass',
    '@foxford/docs-utils/assets/styles/body.sass',
    '@foxford/docs-utils/assets/styles/code-mirror.sass',
    '@foxford/docs-utils/assets/styles/modal-overlay-background-demo.sass',
    '@foxford/docs-utils/assets/js/setup.js',
  ],
  skipComponentsWithoutExample: true,
  exampleMode: 'collapse',
  styleguideComponents: {
    Wrapper: resolve(__dirname, './components/Wrapper/Wrapper.js'),
    ComponentsListRenderer: resolve(__dirname, './components/ComponentsList/ComponentsList.js'),
  },
  theme: {
    maxWidth: '100%',
    sidebarWidth: 250,
    fontFamily: {
      base: [
        'Circe',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
      ],
      monospace: [
        'SF Mono',
        'Monaco',
        'Inconsolata',
        'Fira Code',
        'Fira Mono',
        'Droid Sans Mono',
        'Consolas',
        'Roboto Mono',
        'Source Code Pro',
        'monospace',
      ],
    },
  },
  styles: {
    Logo: {
      logo: {
        minHeight: '64px',
        padding: '10px 10px 10px 85px',
        color: '#197ecf',
        fontWeight: 'bold',
        display: 'flex',
        'align-items': 'center',
      },
    },
    StyleGuide: {
      root: {
        'text-rendering': 'optimizeLegibility',
        '-moz-osx-font-smoothing': 'grayscale',
        '-webkit-font-smoothing': 'antialiased',
      },
      content: {
        maxWidth: '100%',
        overflowX: 'hidden',
        backgroundColor: '#fff',
        fontFamily: 'Circe, -apple-system, BlinkMacSystemFont, sans-serif',
      },
      sidebar: {
        backgroundColor: '#fff4e8',
        border: 'none',
        'box-shadow': '0 0 10px 4px rgba(0,0,0,.2)',
        '&::-webkit-scrollbar': {
          width: 3,
        },
        '&::-webkit-scrollbar-thumb': {
          'border-radius': '3px',
          'borderTopWidth': 0,
          'borderBottomWidth': 0,
          'backgroundColor': '#ff866e',
          'minHeight': 40,
          '&:active': {
            borderLeftWidth: 2,
            borderRightWidth: 2,
          },
        },
      },
      logo: {
        padding: '16px 0',
        borderColor: '#b9d1e4',
        background: '#d6dff3 url("./images/logo.svg") 16px center no-repeat',
        backgroundSize: '64px 64px',
      },
    },
    Playground: {
      preview: {
        padding: 0,
      },
    },
    ReactComponent: {
      docs: {
        fontSize: '14px',
        display: 'flex',
        marginBottom: '20px',
        justifyContent: 'space-between',
        '& > div:nth-child(2) > p': {
          textAlign: 'right',
          marginBottom: '6px',
        },
      },
    },
  },
}
