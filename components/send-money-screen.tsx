'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Send } from 'lucide-react'

export function SendMoneyScreen() {
  const [recipient, setRecipient] = useState('')
  const [amount, setAmount] = useState('')

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically integrate with a backend API to process the transaction
    console.log(`Sending ₱${amount} to ${recipient}`)
    // Reset form or navigate to confirmation screen
  }

  return (
    <div className="container mx-auto p-4 max-w-md">
      <header className="flex items-center mb-6">
        <Button variant="ghost" size="icon" className="mr-2">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-bold">Send Money</h1>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Enter Transfer Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSend} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="recipient">Recipient</Label>
              <Input
                id="recipient"
                placeholder="Enter mobile number or email"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              <Send className="mr-2 h-4 w-4" /> Send Money
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}