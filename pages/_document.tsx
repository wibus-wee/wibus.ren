/*
 * @FilePath: /iucky.cn/pages/_document.tsx
 * @author: Wibus
 * @Date: 2022-08-07 21:00:31
 * @LastEditors: Wibus
 * @LastEditTime: 2022-09-12 22:16:10
 * Coding With IU
 */

import Document, { Head, Html, Main, NextScript } from "next/document";


export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head lang={"zh-cn"}>
          <meta charSet="UTF-8" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="msapplication-starturl" content="/" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel="apple-touch-icon" href="/favicon.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <script async defer data-website-id="ec4a742f-f950-4d87-94ea-d57920decb44" src="https://umami.iucky.cn/umami.js"></script>

          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel="apple-touch-startup-image" href="/favicon.png" />

        </Head>


        <body id="app" className="font-sans text-gray-700 dark:text-gray-200">
          <Main />
          <NextScript />
        </body>
      </Html >
    )
  }
}