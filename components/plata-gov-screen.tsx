'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building2, ArrowRight } from 'lucide-react'
import ResponsiveLayout from './ResponsiveLayout'

const governmentServices = [
  'SSS Contribution',
  'PhilHealth Payment',
  'Pag-IBIG Contribution',
  'BIR Tax Payment',
  'LTO Vehicle Registration',
  'NBI Clearance',
  'Passport Application Fee'
]

export function PlataGovScreen() {
  const [selectedService, setSelectedService] = useState('')
  const [referenceNumber, setReferenceNumber] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Processing government payment:', { selectedService, referenceNumber, amount })
    // Here you would typically handle the payment processing
  }

  return (
    <ResponsiveLayout>
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Government Services</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="service">Select Service</Label>
              <Select onValueChange={setSelectedService} required>
                <SelectTrigger id="service">
                  <SelectValue placeholder="Choose a service" />
                </SelectTrigger>
                <SelectContent>
                  {governmentServices.map((service) => (
                    <SelectItem key={service} value={service}>{service}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="referenceNumber">Reference Number</Label>
              <Input
                id="referenceNumber"
                placeholder="Enter reference number"
                value={referenceNumber}
                onChange={(e) => setReferenceNumber(e.target.value)}
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
          </form>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit} className="w-full" disabled={!selectedService || !referenceNumber || !amount}>
            <Building2 className="mr-2 h-4 w-4" /> Pay Government Service
          </Button>
        </CardFooter>
      </Card>
    </ResponsiveLayout>
  )
}