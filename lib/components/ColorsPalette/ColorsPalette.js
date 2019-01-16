import React from 'react'
import PropTypes from 'prop-types'

import css from './ColorsPalette.sass'

/** Colors pallete output */
const ColorsPalette = ({ colors }) => (
  <div className={css.root}>
    {Object.keys(colors).map(name => (
      <div key={name} className={css.cell} style={{ background: colors[name] }}>
        <div className={css.name}>{name}</div>
        <div className={css.value}>
          {colors[name]}
        </div>
      </div>
    ))}
  </div>
)

ColorsPalette.propTypes = {
  colors: PropTypes.shape({}),
}

ColorsPalette.defaultProps = {
  colors: {},
}

export { ColorsPalette }

export default ColorsPalette
