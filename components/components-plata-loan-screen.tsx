'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CreditCard, ArrowRight } from 'lucide-react'

const loanTypes = [
  'Personal Loan',
  'Home Loan',
  'Car Loan',
  'Business Loan',
  'Education Loan'
]

export function ComponentsPlataLoanScreen() {
  const [selectedLoan, setSelectedLoan] = useState('')
  const [loanNumber, setLoanNumber] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Processing loan payment:', { selectedLoan, loanNumber, amount })
    // Here you would typically handle the loan payment processing
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Loan Services</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="loan">Select Loan Type</Label>
            <Select onValueChange={setSelectedLoan} required>
              <SelectTrigger id="loan">
                <SelectValue placeholder="Choose loan type" />
              </SelectTrigger>
              <SelectContent>
                {loanTypes.map((loan) => (
                  <SelectItem key={loan} value={loan}>{loan}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="loanNumber">Loan Number</Label>
            <Input
              id="loanNumber"
              placeholder="Enter loan number"
              value={loanNumber}
              onChange={(e) => setLoanNumber(e.target.value)}
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
          <Button type="submit" className="w-full flex items-center justify-center">
            <CreditCard className="mr-2 h-4 w-4" /> Pay Loan
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}