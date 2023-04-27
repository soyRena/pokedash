import React from 'react'
import { AppProps } from 'next/app'

import theme from '../ui/theme'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '../ui/create-emotion-cache'

interface MyAppProps extends AppProps {
   emotionCache?: EmotionCache
}

const queryClient = new QueryClient()

const clientSideEmotionCache = createEmotionCache()

function MyApp(props: MyAppProps) {
   const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

   return (
      <QueryClientProvider client={queryClient}>
         <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
               <CssBaseline />
               <Component {...pageProps} />
            </ThemeProvider>
            <ReactQueryDevtools initialIsOpen={false} />
         </CacheProvider>
      </QueryClientProvider>
   )
}

export default MyApp
