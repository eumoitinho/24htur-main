import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import TrackingProvider from '../components/TrackingProvider'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata = {
  title: '24H Turismo - Transportes e Locação de Veículos',
  description: 'Serviços de transporte corporativo, locação de veículos e gestão de frota para empresas',
  metadataBase: new URL('https://24turismo.vercel.app'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={plusJakartaSans.className}>
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M24J5ZPS');`
        }} />
        {/* WhatsApp Script */}
        <script 
          type="text/javascript" 
          async 
          src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/2deb2af1-fe70-43e5-ab3b-70dc4e7a9a77-loader.js"
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M24J5ZPS"
                  height="0" width="0" style={{display: 'none', visibility: 'hidden'}}></iframe>
        </noscript>
        <TrackingProvider>
          {children}
        </TrackingProvider>
      </body>
    </html>
  )
}