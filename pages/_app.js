import { withApollo } from '../lib/apollo'
import Template from '../components/Template'

function _App({ Component, pageProps }) {
  return (
    <Template>
      <Component {...pageProps} />
    </Template>
  )
}

export default withApollo(_App)
