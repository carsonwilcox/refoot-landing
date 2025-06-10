import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <title>REFOOT™ Recovery Socks</title>
        <meta name="title" content="REFOOT™ Recovery Socks" />
        <meta name="description" content="Premium post-workout socks engineered for athletes who demand more than just cotton. Recover stronger. Train smarter." />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://refootwear.com" />
        <meta property="og:title" content="REFOOT™ Recovery Socks" />
        <meta property="og:description" content="Premium post-workout socks engineered for athletes who demand more than just cotton. Recover stronger. Train smarter." />
        <meta property="og:image" content="https://refootwear.com/images/sock-black.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://refootwear.com" />
        <meta property="twitter:title" content="REFOOT™ Recovery Socks" />
        <meta property="twitter:description" content="Premium post-workout socks engineered for athletes who demand more than just cotton. Recover stronger. Train smarter." />
        <meta property="twitter:image" content="https://refootwear.com/images/sock-black.png" />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6ZQFV14TZZ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6ZQFV14TZZ', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
