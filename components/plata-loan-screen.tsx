'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PiggyBank, ArrowRight } from 'lucide-react'
import ResponsiveLayout from './ResponsiveLayout'

const loanTypes = ['Personal Loan', 'Business Loan', 'Home Loan', 'Car Loan']
const loanTerms = ['6 months', '12 months', '24 months', '36 months']

export function PlataLoanScreen() {
  const [loanType, setLoanType] = useState('')
  const [loanAmount, setLoanAmount] = useState('')
  const [loanTerm, setLoanTerm] = useState('')
  const [monthlyIncome, setMonthlyIncome] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitting loan application:', { loanType, loanAmount, loanTerm, monthlyIncome })
    // Here you would typically handle the loan application submission
  }

  return (
    <ResponsiveLayout>
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Loan Application</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="loanType">Loan Type</Label>
              <Select onValueChange={setLoanType} required>
                <SelectTrigger id="loanType">
                  <SelectValue placeholder="Select loan type" />
                </SelectTrigger>
                <SelectContent>
                  {loanTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="loanAmount">Loan Amount</Label>
              <Input
                id="loanAmount"
                type="number"
                placeholder="Enter loan amount"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="loanTerm">Loan Term</Label>
              <Select onValueChange={setLoanTerm} required>
                <SelectTrigger id="loanTerm">
                  <SelectValue placeholder="Select loan term" />
                </SelectTrigger>
                <SelectContent>
                  {loanTerms.map((term) => (
                    <SelectItem key={term} value={term}>{term}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="monthlyIncome">Monthly Income</Label>
              <Input
                id="monthlyIncome"
                type="number"
                placeholder="Enter monthly income"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(e.target.value)}
                required
              />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit} className="w-full" disabled={!loanType || !loanAmount || !loanTerm || !monthlyIncome}>
            <PiggyBank className="mr-2 h-4 w-4" /> Apply for Loan
          </Button>
        </CardFooter>
      </Card>
    </ResponsiveLayout>
  )
}