/* eslint-disable */
// @ts-nocheck
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import EnhancedBackground from './components/EnhancedBackground'
import CustomCursor from './components/CustomCursor'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter' 
})
const poppins = Poppins({ 
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata = {
  title: 'admissionFull | Empowering Education Digitally',
  description: 'Transform your educational institution with our intelligent growth platform. Increase admissions, engagement, and student success.',
  keywords: 'education, admissions, student engagement, digital growth, educational technology',
  authors: [{ name: 'admissionFull' }],
  openGraph: {
    title: 'admissionFull - Digital Growth for Educational Institutions',
    description: 'Empower your institution with intelligent digital solutions',
    type: 'website',
    url: 'https://admissionfull.vercel.app',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <CustomCursor />
        <EnhancedBackground />
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}