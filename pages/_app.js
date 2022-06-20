import { ChakraProvider } from '@chakra-ui/react'
import Layout from "../components/layouts/main"
import Fonts from '../components/fonts'
import theme from '../lib/theme'

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default Website

// import { ChakraProvider, extendTheme, CSSReset } from '@chakra-ui/react'
// import '../styles/globals.css'

// // Extend the theme to include custom colors, fonts, etc
// const colors = {
//   brand: {
//     900: '#1a365d',
//     800: '#153e75',
//     700: '#2a69ac',
//   },
// }

// const theme = extendTheme({ colors })

// function MyApp({ Component, pageProps }) {
//   return (
//     <ChakraProvider theme={theme}>
//       <CSSReset />
//       <Component {...pageProps} />
//     </ChakraProvider>
//   )
// }

// export default MyApp
