'use client'

import React from 'react'
import { QrCode, Send, CreditCard, Wallet as WalletIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ComponentsWallet() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-bold">Platapay Wallet</h1>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6">Wallet</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">₱10,000.00</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
                  <Send className="h-8 w-8 mb-2" />
                  Send Money
                </Button>
                <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
                  <CreditCard className="h-8 w-8 mb-2" />
                  Pay Bills
                </Button>
                <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
                  <WalletIcon className="h-8 w-8 mb-2" />
                  Top Up
                </Button>
                <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
                  <QrCode className="h-8 w-8 mb-2" />
                  QR Payment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {[1, 2, 3].map((_, index) => (
                <li key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">Payment to John Doe</p>
                    <p className="text-sm text-muted-foreground">May 1, 2023</p>
                  </div>
                  <p className="font-semibold text-red-500">-₱500.00</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </main>
      <footer className="bg-gray-100 p-4 text-center">
        <p>&copy; 2023 Platapay. All rights reserved.</p>
      </footer>
    </div>
  )
}