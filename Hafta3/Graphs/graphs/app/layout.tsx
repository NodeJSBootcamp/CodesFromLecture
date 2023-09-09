import CustomLayout from '@/component/layout/customlayout'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <CustomLayout>
          <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            {children}
          </main>
        </CustomLayout>
      </body>

    </html>

  )
}

