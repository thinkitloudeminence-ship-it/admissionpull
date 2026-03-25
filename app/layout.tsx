import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import CustomCursor from './components/CustomCursor'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter' 
})
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata = {
  title: 'admissionPull | Digital Growth System for Educational Institutions',
  description: 'Transform your educational institution with our futuristic growth platform. Increase admissions, engagement, and visibility.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}