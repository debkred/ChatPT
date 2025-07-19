
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body style={{ fontFamily: 'sans-serif', margin: 0, padding: 20, backgroundColor: '#f7f7f7' }}>
        {children}
      </body>
    </html>
  );
}
