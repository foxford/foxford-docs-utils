import React, { Component } from 'react'
import PropTypes from 'prop-types'

import css from './ColorsPalette.sass'

/** Colors pallete output */
class ColorsPalette extends Component {
  constructor (props) {
    super(props)

    this.state = {
      searchResult: null,
    }
  }

  onSearch = (e) => {
    const { value } = e.target

    this.setState({ searchResult: this.findColor(value) })
  }

  findColor = (str = '') => {
    const { colors } = this.props

    if (str.length < 2) return false

    return Object.entries(colors)
      .filter(entry => entry.find(item => item.includes(str)))
  }

  render () {
    const { searchResult } = this.state
    const { colors } = this.props

    return (
      <div className={css.root}>
        <div className={css.searchBlock} >
          <label className={css.searchColor}>
             Search color: <input id='searchcol' onChange={this.onSearch} />
          </label>
          { searchResult && searchResult.map(color =>
            (
              <div className={css.result} style={{ color: color[1] }} key={color[0]}>
                <span className={css.resultName}>{color[0]}</span>
                : <span className={css.resultSwatch} />
                <span className={css.resultValue}>{color[1]}</span>
              </div>
          ))}
        </div>
        <div className={css.palette}>
          {Object.keys(colors).map(name => (
            <div key={name} className={css.cell} style={{ background: colors[name] }}>
              <div className={css.name}>{name}</div>
              <div className={css.value}>
                {colors[name]}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

ColorsPalette.propTypes = {
  colors: PropTypes.shape({}),
}

ColorsPalette.defaultProps = {
  colors: {},
}

export { ColorsPalette }

export default ColorsPalette
