'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shield, ArrowRight } from 'lucide-react'

const insuranceTypes = [
  'Life Insurance',
  'Health Insurance',
  'Car Insurance',
  'Home Insurance',
  'Travel Insurance'
]

export function ComponentsPlataInsureScreen() {
  const [selectedInsurance, setSelectedInsurance] = useState('')
  const [policyNumber, setPolicyNumber] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Processing insurance payment:', { selectedInsurance, policyNumber, amount })
    // Here you would typically handle the insurance payment processing
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Insurance Services</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="insurance">Select Insurance Type</Label>
            <Select onValueChange={setSelectedInsurance} required>
              <SelectTrigger id="insurance">
                <SelectValue placeholder="Choose insurance type" />
              </SelectTrigger>
              <SelectContent>
                {insuranceTypes.map((insurance) => (
                  <SelectItem key={insurance} value={insurance}>{insurance}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="policyNumber">Policy Number</Label>
            <Input
              id="policyNumber"
              placeholder="Enter policy number"
              value={policyNumber}
              onChange={(e) => setPolicyNumber(e.target.value)}
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
            <Shield className="mr-2 h-4 w-4" /> Pay Insurance
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}