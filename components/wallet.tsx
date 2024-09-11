'use client'

import React from 'react'
import { QrCode, Send } from 'lucide-react'
import { Header } from './Header'
import { Footer } from './Footer'
import { QuickActions } from './QuickActions'
import './styles.css'

export function Wallet() {
  return (
    <div className="min-h-screen">
      <div className="container">
        <Header />

        <main>
          <div className="card">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold">Available Balance</h2>
              <QrCode size={24} />
            </div>
            <p className="text-3xl font-bold mb-4">₱1000.00</p>
            <button className="button w-full">Cash In</button>
          </div>

          <QuickActions />

          <div className="card">
            <div className="flex space-x-2 mb-4">
              <button className="button flex-1">Send</button>
              <button className="button flex-1">Pay</button>
              <button className="button flex-1">Cash In</button>
            </div>
            <form>
              <div className="mb-4">
                <label htmlFor="recipient" className="block text-sm font-medium mb-1">Recipient</label>
                <input 
                  type="text" 
                  id="recipient" 
                  placeholder="Enter mobile number or email" 
                  className="input"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="amount" className="block text-sm font-medium mb-1">Amount</label>
                <input 
                  type="text" 
                  id="amount" 
                  placeholder="Enter amount" 
                  className="input"
                />
              </div>
              <button type="submit" className="button w-full flex items-center justify-center">
                <Send size={18} className="mr-2" />
                Send Money
              </button>
            </form>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}
