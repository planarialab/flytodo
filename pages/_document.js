import * as React from 'react'

import Document, { Head, Main, NextScript } from 'next/document'

export default class extends Document {
  static async getInitialProps (...args) {
    const d: any = Document
    const documentProps = await d.getInitialProps(...args)
    const { renderPage } = args[0]
    const page = renderPage()

    return { ...documentProps, ...page }
  }

  render () {
    return (
      <html lang="ko">
        <Head>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="SITE_NAME" />
          <meta property="og:title" content="SITE_TITLE" />
          <meta property="og:description" content="SITE_DESCRIPTION" />
          <meta property="og:image" content="SITE_IMAGE" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="SITE_NAME" />
          <meta name="twitter:title" content="SITE_TITLE" />
          <meta name="twitter:description" content="SITE_DESCRIPTION" />
          <meta property="twitter:image" content="SITE_IMAGE" />

          <link rel="stylesheet" href="/static/css/normalize.css" />
          <link rel="stylesheet" href="/static/css/main.css" />
          <link rel="shortcut icon" href="/static/img/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
