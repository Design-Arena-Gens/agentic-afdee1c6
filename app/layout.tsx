import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Accrue Flow – Your Private Equity Cash Flow. Visualized. Guaranteed.',
  description: 'AI-powered private equity command center for ultra-high-net-worth investors',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
