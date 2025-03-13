    import './globals.css'
    import type { MetadataRoute } from 'next/server'
    import { Inter } from 'next/font/google'

    const inter = Inter({ subsets: ['latin'] })

    export default function RootLayout({ children }: { children: React.ReactNode }) {
      return (
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      )
    }

    export const metadata: MetadataRoute = {
      title: 'Chess App',
      description: 'A simple chess app built with Next.js',
    }
  