'use client'

import { Send, CreditCard, Building, Zap } from 'lucide-react'

const quickActions = [
  { name: 'Send', icon: Send },
  { name: 'Pay', icon: CreditCard },
  { name: 'Bank Transfer', icon: Building },
  { name: 'Generate', icon: Zap },
]

export function QuickActions() {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      {quickActions.map((action, index) => (
        <button 
          key={index} 
          className="bg-secondary bg-opacity-50 p-4 rounded-xl flex flex-col items-center justify-center"
        >
          <action.icon size={24} className="mb-2" />
          <span className="text-xs text-center">{action.name}</span>
        </button>
      ))}
    </div>
  )
}