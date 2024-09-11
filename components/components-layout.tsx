'use client'

import React from 'react'
import MainMenu from './MainMenu'

interface LayoutProps {
  children: React.ReactNode
}

export function ComponentsLayout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      <aside className="w-64 hidden md:block p-4">
        <MainMenu />
      </aside>
      <main className="flex-1 p-4 overflow-auto">
        {children}
      </main>
    </div>
  )
}