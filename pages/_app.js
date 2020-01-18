import App from 'next/app'
import Template from '../components/Template'

class _App extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Template>
        <Component {...pageProps} />
      </Template>
    )
  }
}

export default _App
