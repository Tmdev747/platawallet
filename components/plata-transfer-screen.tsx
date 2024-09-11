'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight } from 'lucide-react'
import ResponsiveLayout from './ResponsiveLayout'

const transferMethods = ['To Platapay User', 'To Bank Account', 'To E-wallet']

export function PlataTransferScreen() {
  const [transferMethod, setTransferMethod] = useState('')
  const [recipient, setRecipient] = useState('')
  const [amount, setAmount] = useState('')
  const [note, setNote] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitting transfer:', { transferMethod, recipient, amount, note })
    // Here you would typically handle the submission, perhaps navigating to a confirmation screen
  }

  return (
    <ResponsiveLayout>
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Send Money</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="transferMethod">Transfer Method</Label>
              <Select onValueChange={setTransferMethod} required>
                <SelectTrigger id="transferMethod">
                  <SelectValue placeholder="Choose transfer method" />
                </SelectTrigger>
                <SelectContent>
                  {transferMethods.map((method) => (
                    <SelectItem key={method} value={method}>{method}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="recipient">Recipient</Label>
              <Input
                id="recipient"
                placeholder="Enter recipient's details"
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
            <div className="space-y-2">
              <Label htmlFor="note">Note (Optional)</Label>
              <Input
                id="note"
                placeholder="Add a note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">
              Review Transfer <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </ResponsiveLayout>
  )
}