import React from 'react'
import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles'

const WithSpinner = (WrappedComponent) => {
  const SpinnerOrWrappedComponent = ({ isLoading, ...props }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...props} />
    )
  }

  return SpinnerOrWrappedComponent
}

export default WithSpinner
