import Navbar from '@/components/layout/navbar/navbar'
import '../styles/globals.css'
import Footer from '@/components/layout/footer/footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='h-screen bg-white'>
        <Navbar />
        <main className='h-full bg-white'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
