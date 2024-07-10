import './globals.css'
import { Freehand, Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { ThemeContextProvider } from '@/Context/ThemeContext'
import ThemeProvider from '@/Providers/ThemeProvider'
import AuthProvider from '@/Providers/AuthProvider'
import {Nunito} from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })
const nunito = Nunito({ subsets: ["latin"], weight: ['900'], variable: '--font-nunito' });
const freehand = Freehand({ subsets: ["latin"], weight: ['400'], variable: '--font-freehand' });


export const metadata = {
  title: 'PostCraft',
  description: 'Looking for the one? well you are looking at the one!',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={`${inter.className} ${nunito.variable} ${freehand.variable}`}>
        <AuthProvider>

        <ThemeContextProvider>
          <ThemeProvider>

        <div className='container'> 
        <Navbar/> 
        <div className='wrapper'>    
       
        {children}
    
        </div>
        <Footer/>
        </div>    
          </ThemeProvider>
        </ThemeContextProvider>    
        </AuthProvider>
        </body>
    </html>
  )
}
