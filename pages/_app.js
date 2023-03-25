import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script src="https://telegram.org/js/telegram-web-app.js" id='1' onLoad={() => {
          console.log('Script has loaded')
          Telegram.WebApp.colorScheme
        }}> 
    </Script>

    <Component {...pageProps} />
    </>
    )
}

export default MyApp
