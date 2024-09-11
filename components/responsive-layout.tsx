'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Home, CreditCard, Send, Wallet, ShoppingCart, QrCode, Building2, PiggyBank, ShieldCheck } from 'lucide-react'

const menuItems = [
  { name: 'Dashboard', icon: Home },
  { name: 'PlataLoad', icon: CreditCard },
  { name: 'PlataBills', icon: CreditCard },
  { name: 'PlataTransfer', icon: Send },
  { name: 'PlataWallet', icon: Wallet },
  { name: 'PlataShop', icon: ShoppingCart },
  { name: 'PlataScan', icon: QrCode },
  { name: 'PlataGov', icon: Building2 },
  { name: 'PlataLoan', icon: PiggyBank },
  { name: 'PlataInsure', icon: ShieldCheck },
]

interface ResponsiveLayoutProps {
  children: React.ReactNode
}

export function ResponsiveLayout({ children }: ResponsiveLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const Logo = () => (
    <div className="flex items-center">
      <img 
        src="/platapay-logo.png" 
        alt="Platapay Logo" 
        className="h-8 md:h-10 w-auto"
      />
    </div>
  )

  const SidebarContent = () => (
    <ScrollArea className="h-full py-6 pl-6 pr-6">
      <div className="mb-6">
        <Logo />
      </div>
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Button
            key={item.name}
            variant="ghost"
            className="w-full justify-start"
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.name}
          </Button>
        ))}
      </nav>
    </ScrollArea>
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <header className="lg:hidden flex items-center justify-between p-4 border-b">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[80%] sm:w-[350px]">
            <SidebarContent />
          </SheetContent>
        </Sheet>
        <Logo />
        <div className="w-8" /> {/* Placeholder for right-side items if needed */}
      </header>

      {/* Desktop Layout */}
      <div className="hidden lg:flex">
        {/* Sidebar */}
        <aside className="w-64 border-r h-screen">
          <SidebarContent />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>

      {/* Mobile Content */}
      <main className="lg:hidden p-4">
        {children}
      </main>
    </div>
  )
}