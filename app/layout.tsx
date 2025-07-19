
import './globals.css'

export const metadata = {
  title: 'ChatPT',
  description: 'AI personlig tränare',
}

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  )
}
