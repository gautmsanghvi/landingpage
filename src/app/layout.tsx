import './globals.css'
import { ThemeProvider } from 'next-themes'

export const metadata = {
  title: 'Landing Page',
  description: 'Assignment landing page with Next.js, Tailwind, and GSAP',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
