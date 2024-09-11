'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { 
  Home, 
  Wallet, 
  SendHorizontal, 
  FileText, 
  Smartphone, 
  ShoppingBag, 
  ScanLine, 
  Building2, 
  PiggyBank, 
  ShieldCheck 
} from 'lucide-react'

const menuItems = [
  { name: 'Dashboard', icon: Home, href: '/' },
  { name: 'Wallet', icon: Wallet, href: '/wallet' },
  { name: 'Transfer', icon: SendHorizontal, href: '/transfer' },
  { name: 'Bills', icon: FileText, href: '/bills' },
  { name: 'Load', icon: Smartphone, href: '/load' },
  { name: 'Shop', icon: ShoppingBag, href: '/shop' },
  { name: 'Scan', icon: ScanLine, href: '/scan' },
  { name: 'Government', icon: Building2, href: '/government' },
  { name: 'Loan', icon: PiggyBank, href: '/loan' },
  { name: 'Insurance', icon: ShieldCheck, href: '/insurance' },
]

export function ComponentsMainMenu() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col space-y-2 p-4 bg-card rounded-lg">
      {menuItems.map((item) => {
        const isActive = pathname === item.href
        const Icon = item.icon
        return (
          <Link key={item.name} href={item.href} passHref legacyBehavior>
            <Button
              variant={isActive ? "default" : "ghost"}
              className={`w-full justify-start ${isActive ? 'bg-primary text-primary-foreground' : ''}`}
            >
              <Icon className="mr-2 h-4 w-4" />
              <span>{item.name}</span>
            </Button>
          </Link>
        )
      })}
    </nav>
  )
}