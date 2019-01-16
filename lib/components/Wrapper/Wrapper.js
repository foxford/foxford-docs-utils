import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import css from './Wrapper.sass'

const BACKGROUNDS = [
  'white',
  'transparent',
  'black',
  'beige',
]

function createSequence () {
  let start = 0

  return {
    next: () => start++,
  }
}

const seq = createSequence()

/** Wrapper for components */
class Wrapper extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      bgColor: props.bgColor,
    }

    this.id = `background_Changer_${seq.next()}`
  }

  handleBackgroundChange = bgColor => this.setState({ bgColor })

  renderBackgroundChange () {
    return (
      <div>
        <span><b>Background: </b></span>
        {BACKGROUNDS.map(color => (
          <label className={css.checkbox} key={color}>
            <input
              id={`${this.id}-${color}`}
              type='radio'
              name={`${this.id}-${color}`}
              className={css.input}
              checked={this.state.bgColor === color}
              onChange={() => this.handleBackgroundChange(color)}
            />
            <span className={`${css.swatch} ${css[color]}`} />
            <span className={css.label}>{color}</span>
          </label>
        ))}
      </div>
    )
  }

  render () {
    const { children } = this.props

    return (
      <div className={css.container}>
        <header className={css.header}>
          {this.renderBackgroundChange()}
          <div className={css.spacer} />
        </header>
        <div className={`${css.wrapper} ${css[this.state.bgColor]}`}>
          {children}
        </div>
      </div>
    )
  }
}

Wrapper.propTypes = {
  children: PropTypes.node,
  bgColor: PropTypes.string,
}

Wrapper.defaultProps = {
  bgColor: 'white',
}

export { Wrapper }

export default Wrapper
