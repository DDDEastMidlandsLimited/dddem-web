module.exports = {
    withRouter: component => {
      component.defaultProps = {
        ...component.defaultProps,
        router: { pathname: 'mocked-path' }
      }
      return component
    }
  }
  