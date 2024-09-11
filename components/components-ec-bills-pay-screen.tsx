'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const billers = [
  { name: 'Electric Company', code: 'ELEC001' },
  { name: 'Water Utility', code: 'WATER001' },
  { name: 'Internet Provider', code: 'NET001' },
]

export function ComponentsEcBillsPayScreen() {
  const [selectedBiller, setSelectedBiller] = useState('')
  const [accountNumber, setAccountNumber] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitting payment:', { selectedBiller, accountNumber, amount })
    // Here you would typically handle the payment submission
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Pay Bills</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="biller">Select Biller</Label>
            <Select onValueChange={setSelectedBiller} required>
              <SelectTrigger id="biller">
                <SelectValue placeholder="Choose biller" />
              </SelectTrigger>
              <SelectContent>
                {billers.map((biller) => (
                  <SelectItem key={biller.code} value={biller.code}>{biller.name}</SelectItem>
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
          <Button type="submit" className="w-full">Pay Bill</Button>
        </form>
      </CardContent>
    </Card>
  )
}