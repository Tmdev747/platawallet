'use client'

import React from 'react'
import { CreditCard, Phone, Receipt, ShoppingCart } from 'lucide-react'

export function ComponentsQuickActions() {
  const actions = [
    { icon: CreditCard, label: 'Pay Bills' },
    { icon: Phone, label: 'Buy Load' },
    { icon: Receipt, label: 'Pay Taxes' },
    { icon: ShoppingCart, label: 'Shop' },
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <button key={index} className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg">
            <action.icon className="mb-2" size={24} />
            <span>{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}