'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight } from 'lucide-react'
import ResponsiveLayout from './ResponsiveLayout'

const billers = ['Meralco', 'Manila Water', 'Globe', 'Smart', 'PLDT']

export function PlataBillsScreen() {
  const [biller, setBiller] = useState('')
  const [accountNumber, setAccountNumber] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitting bill payment:', { biller, accountNumber, amount })
    // Here you would typically handle the submission, perhaps navigating to a confirmation screen
  }

  return (
    <ResponsiveLayout>
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Pay Bills</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="biller">Select Biller</Label>
              <Select onValueChange={setBiller} required>
                <SelectTrigger id="biller">
                  <SelectValue placeholder="Choose biller" />
                </SelectTrigger>
                <SelectContent>
                  {billers.map((b) => (
                    <SelectItem key={b} value={b}>{b}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="accountNumber">Account Number</Label>
              <Input
                id="accountNumber"
                placeholder="Enter account number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
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
              Proceed to Payment <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </ResponsiveLayout>
  )
}