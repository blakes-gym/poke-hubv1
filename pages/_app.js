import App from 'next/app'
import { withApollo } from '../graphql/apollo'
import { ApolloProvider } from 'react-apollo'

import Template from '../components/Template'

class _App extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <ApolloProvider client={apolloClient}>
        <Template>
          <Component {...pageProps} />
        </Template>
      </ApolloProvider>
    )
  }
}

export default withApollo(_App)
