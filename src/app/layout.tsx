// import { link } from 'fs'
import './globals.css'

export const metadata = {
  title: 'Google Clone',
  // link: 'href="img/favicon.ico"',
  description: 'Google search',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     {/* <link rel='stylesheet' href='css/fg.css'/> */}
      <body>{children}</body>
    </html>
  )
}