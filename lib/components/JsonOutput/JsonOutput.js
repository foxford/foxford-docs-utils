import React, { Component } from 'react'
import PropTypes from 'prop-types'

import css from './JsonOutput.sass'

/** Helpers  */
function jsonSyntaxHighlight (rawJson) {
  let json = rawJson

  if (typeof json !== 'string') {
    json = JSON.stringify(json, undefined, 2)
  }
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

  const output = json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, (match) => {
    let cls = css.number

    if (match.startsWith('"')) {
      if (match.endsWith(':')) {
        cls = css.key
      } else {
        cls = css.string
      }
    } else if (/true|false/.test(match)) {
      cls = css.boolean
    } else if (/null/.test(match)) {
      cls = css.null
    }

    return `<span class='${cls}'>${match}</span>`
  })

  return output
}

/** Pretty prints JSON or object */
const JsonOutput = class extends Component {
  constructor (props) {
    super(props)

    this.state = {
      collapsed: true,
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState({ collapsed: !this.state.collapsed })
  }

  render () {
    const { content } = this.props
    const { collapsed } = this.state

    return (
      <div className={css.root} >
        <button className={css.toggle} onClick={this.toggle}>{collapsed ? 'Show JSON' : 'Hide JSON'}</button>
        {!collapsed && (
          <pre
            className={css.root}
            dangerouslySetInnerHTML={{ __html: jsonSyntaxHighlight(content, css) }}
          />
        )}
      </div>
    )
  }
}

const {
  oneOfType,
  string,
  object,
} = PropTypes

JsonOutput.propTypes = {
  content: oneOfType([string, object]),
}

export { JsonOutput }

/* Default exports will be deprecated soon, use named exports instead */
export default JsonOutput
