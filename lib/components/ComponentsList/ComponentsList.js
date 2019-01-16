import React from 'react'
import PropTypes from 'prop-types'

import Link from 'rsg-components/Link'

import css from './ComponentsList.sass'

const ComponentsList = class extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      hiddenContent: {},
    }
  }

  toggleContent = (e, name) => {
    e.stopPropagation()

    this.setState({
      hiddenContent: {
        ...this.state.hiddenContent,
        [name]: !this.state.hiddenContent[name],
      },
    })

    return false
  }

  render () {
    const {
      items,
    } = this.props

    const { hiddenContent } = this.state

    return (
      <ul className={css.root}>
        {items.map(({
          heading,
          name,
          href,
          content,
        }) => {
            const childItems = (content && content.props.items) || []
            const hash = Math.random() * 100
            const duplicatedItemIndex = childItems.findIndex(item => item.name === name) !== -1
            const displayName = duplicatedItemIndex ? `${name} states` : name

            return (
              <li
                key={`${name}-${hash}`}
                className={`${css.listItem} ${(!content || !content.props.items.length) ? css.isChild : ''}`}
              >
                {name ? (
                  <Link
                    className={`${css.link} ${heading ? css.heading : ''}`}
                    href={href}
                  >
                    {displayName}
                  </Link>
                ) : null }
                {heading && (
                  <div className={css.toggle} onClick={e => this.toggleContent(e, name)}>
                    {hiddenContent[name] ? '↑' : '↓' }
                  </div>
                )}
                {!hiddenContent[name] && content}
              </li>
            )
        })}
      </ul>
    )
  }
}

const {
  array,
} = PropTypes

ComponentsList.propTypes = {
  items: array.isRequired,
}

export { ComponentsList }

/* Default exports will be deprecated soon, use named exports instead */
export default ComponentsList
