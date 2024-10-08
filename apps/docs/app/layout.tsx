'use client'

import Script from 'next/script'
import Main from '&/main/main'
import Consent from '@/consent/consent'
import Fonts from '$/fonts/fonts'
import Header from 'core/header'
import GdsFlex from '@sebgroup/green-react/src/core/flex'
import { Provider } from '$/provider/provider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Fonts>
            <GdsFlex flex-direction="column">
              <Header />
              <Main>
                {children}
                <Consent />
              </Main>
            </GdsFlex>
          </Fonts>
        </Provider>
        <Script id="data-layer">
          {`window["dataLayer"] = {
            "pageName":"seb.io",
            "pagetype":"StandardPage",
            "language":"en",
            "environment":"prod",
            "project":"green",
            "website":"seb.io",
          };`}
        </Script>
      </body>
    </html>
  )
}
