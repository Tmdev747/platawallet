'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MainMenu from '@/components/MainMenu'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Platapay',
  description: 'Your digital wallet solution',
}

export function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen bg-background">
          <aside className="w-64 hidden md:block p-4">
            <MainMenu />
          </aside>
          <div className="flex flex-col flex-1">
            <Header />
            <main className="flex-1 p-4 overflow-auto">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}