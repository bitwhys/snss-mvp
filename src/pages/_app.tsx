import type { AppProps } from 'next/app'
import {ChakraProvider,extendTheme} from "@chakra-ui/react";
import theme from "@/theme";

import '@fontsource/sora/variable.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}><Component {...pageProps} /></ChakraProvider>
}

export default MyApp
