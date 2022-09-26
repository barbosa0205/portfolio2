import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='es'>
      <Head>
        {/* <!-- --- FONTS --- --> */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap'
          rel='stylesheet'
        />

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap'
          rel='stylesheet'
        />
        {/* 
    <!-- 
        --- ICONS --- --> */}
        <script
          src='https://kit.fontawesome.com/47d0b5dd24.js'
          crossorigin='anonymous'
        ></script>
        <link
          href='https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css'
          rel='stylesheet'
        />
      </Head>
      <body>
        <div>
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  )
}
