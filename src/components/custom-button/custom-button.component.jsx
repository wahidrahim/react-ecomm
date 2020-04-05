import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({ children, ...props }) => {
  const classNames = (() => {
    let names = 'custom-button'

    if (props.inverted) {
      names += ' inverted'
    }
    if (props.isGoogleSignIn) {
      names += ' google-sign-in'
    }

    return names
  })()

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  )
}

export default CustomButton
