import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  style: 'normal'
})

const playfairItalic = Playfair_Display({
  variable: '--font-playfair-italic',
  subsets: ['latin'],
  style: 'italic'
})

export const metadata: Metadata = {
  title: 'Hi There!',
  description: 'Salut! Je suis Thiago. I am a software developer and design enthusiast, based in Brazil.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${playfairItalic.variable}`}>
      <body>{children}</body>
    </html>
  )
}
