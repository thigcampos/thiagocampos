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
  title: 'Thiago Campos | Software Engineer',
  description: `Hey there! I am Thiago Campos, a software engineer based in Brazil. 
  Currently, I am working as a React Developer at Pride Innovations, where I am deeply involved in crafting in-house systems.`,
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
