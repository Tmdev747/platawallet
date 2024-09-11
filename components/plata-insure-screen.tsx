'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShieldCheck, ArrowRight } from 'lucide-react'
import ResponsiveLayout from './ResponsiveLayout'

const insuranceTypes = ['Life Insurance', 'Health Insurance', 'Car Insurance', 'Home Insurance', 'Travel Insurance']

export function PlataInsureScreen() {
  const [insuranceType, setInsuranceType] = useState('')
  const [fullName, setFullName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitting insurance application:', { insuranceType, fullName, dateOfBirth, email, phoneNumber })
    // Here you would typically handle the insurance application submission
  }

  return (
    <ResponsiveLayout>
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Insurance Application</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="insuranceType">Insurance Type</Label>
              <Select onValueChange={setInsuranceType} required>
                <SelectTrigger id="insuranceType">
                  <SelectValue placeholder="Select insurance type" />
                </SelectTrigger>
                <SelectContent>
                  {insuranceTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit} className="w-full" disabled={!insuranceType || !fullName || !dateOfBirth || !email || !phoneNumber}>
            <ShieldCheck className="mr-2 h-4 w-4" /> Apply for Insurance
          </Button>
        </CardFooter>
      </Card>
    </ResponsiveLayout>
  )
}