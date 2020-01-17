import { withApollo } from '../graphql/apollo'

import Template from '../components/Template'

function _App({ Component, pageProps }) {
  return (
    <Template>
      <Component {...pageProps} />
    </Template>
  )
}

export default withApollo(_App)
