import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { ThemeContextProvider } from '@/Context/ThemeContext'
import ThemeProvider from '@/Providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PostCraft',
  description: 'Looking for the one? well you are looking at the one!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>

        <div className='container'>  
        <div className='wrapper'>    
        <Navbar/>
        {children}
        <Footer/>
        </div>
        </div>    
          </ThemeProvider>
        </ThemeContextProvider>    
        </body>
    </html>
  )
}
