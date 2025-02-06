import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abhishumat Singh Beniwal',
  description: 'My developer portfolio',
  // You can also add the favicon metadata here
  icons: {
    icon: '/photo.png',  // Path to your favicon file in the public directory
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* This will link to the favicon */}
        <link rel="icon" href="/photo.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
