import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeConfig } from '../theme/theme.config';
import { Provider } from 'react-redux';
import {store} from '../stores/store'

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeConfig>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
     
  </ThemeConfig>
}

export default MyApp
