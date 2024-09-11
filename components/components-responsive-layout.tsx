'use client'

import React from 'react'
import Image from 'next/image'
import MainMenu from './MainMenu'

interface ResponsiveLayoutProps {
  children: React.ReactNode
}

export function ComponentsResponsiveLayout({ children }: ResponsiveLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      <aside className="w-64 hidden md:block p-4">
        <MainMenu />
      </aside>
      <main className="flex-1 p-4 overflow-auto">
        {children}
      </main>
      <div className="fixed bottom-4 right-4">
        <Image
          src="/logo.png"
          alt="Platapay Logo"
          width={100}
          height={100}
        />
      </div>
    </div>
  )
}