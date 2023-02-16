import '~/styles/globals.scss'

import { Roboto } from '@next/font/google'

import { Providers } from '~/providers'

import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'

interface RootLayoutProps {
  children: React.ReactNode
}

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

const title = process.env.NEXT_PUBLIC_TITLE!
const description = process.env.NEXT_PUBLIC_DESCRIPTION!
const url = process.env.VERCEL_URL!

export const metadata = {
  title: {
    default: title,
    template: `%s | ${title}`
  },
  description,
  twitter: {
    title: title,
    card: 'summary_large_image'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    shortcut: '/favicon.ico'
  }
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="pt-BR" className={roboto.className}>
      <head />
      <body className="flex min-h-screen">
        <Providers>
          <div className="max-w-2xl min-h-screen w-full mx-auto flex flex-col max-md:px-3">
            <Header />

            <main className="flex-1">
              <>{children}</>
            </main>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
