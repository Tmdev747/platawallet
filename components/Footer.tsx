'use client'

import { Home, Mail, QrCode, List, User } from 'lucide-react'

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-secondary py-2 px-4 flex justify-between items-center">
      <Home size={24} />
      <Mail size={24} />
      <div className="bg-primary text-text rounded-full p-3 -mt-8">
        <QrCode size={32} />
      </div>
      <List size={24} />
      <User size={24} />
    </footer>
  )
}