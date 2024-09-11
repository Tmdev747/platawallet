'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, ArrowRight, X, Heart } from 'lucide-react'

const steps = ['Select Biller', 'New Transaction', 'Confirmation']

export function EcBillsPayScreen() {
  const [currentStep, setCurrentStep] = useState(0)
  const [productCode, setProductCode] = useState('')
  const [biller, setBiller] = useState('')
  const [accountNumber, setAccountNumber] = useState('')
  const [accountName, setAccountName] = useState('')
  const [amount, setAmount] = useState('')

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="container mx-auto p-4 max-w-md">
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-xl font-bold">EC Bills Pay</CardTitle>
          <Button variant="ghost" size="icon">
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-6">
            {steps.map((step, index) => (
              <div key={step} className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${index === currentStep ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                  {index + 1}
                </div>
                <span className="text-xs mt-1">{step}</span>
              </div>
            ))}
          </div>

          {currentStep === 0 && (
            <>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="productCode">Select Product Code:</Label>
                  <Select onValueChange={setProductCode}>
                    <SelectTrigger id="productCode">
                      <SelectValue placeholder="Choose..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="BP_WATERWORKS">BP_WATERWORKS</SelectItem>
                      {/* Add more options as needed */}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="biller">Select Biller:</Label>
                  <Select onValueChange={setBiller}>
                    <SelectTrigger id="biller">
                      <SelectValue placeholder="Choose..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="BP WATERWORKS INC.">BP WATERWORKS INC.</SelectItem>
                      {/* Add more options as needed */}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <Button variant="outline" onClick={handlePrevious}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
                <Button onClick={handleNext}>
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </>
          )}

          {currentStep === 1 && (
            <>
              <div className="space-y-4">
                <p>Payee Details : {biller}</p>
                <p>Biller Fee : 10.00</p>
                <div>
                  <Label htmlFor="accountNumber">12 Digit Account Number</Label>
                  <Input
                    id="accountNumber"
                    placeholder="12 Digit Account Number"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="accountName">Account Name</Label>
                  <Input
                    id="accountName"
                    placeholder="Account Name"
                    value={accountName}
                    onChange={(e) => setAccountName(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="amount">Amount</Label>
                  <Input
                    id="amount"
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <Button variant="outline" onClick={handlePrevious}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
                <Button onClick={handleNext}>
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </>
          )}

          {currentStep === 2 && (
            <>
              <div className="space-y-4">
                <h3 className="font-bold">Confirmation</h3>
                <p>Biller: {biller}</p>
                <p>Account Number: {accountNumber}</p>
                <p>Account Name: {accountName}</p>
                <p>Amount: ₱{amount}</p>
                <p>Biller Fee: ₱10.00</p>
                <p>Total Amount: ₱{parseFloat(amount) + 10}</p>
              </div>
              <div className="mt-4 flex justify-between">
                <Button variant="outline" onClick={handlePrevious}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
                <Button onClick={() => console.log('Payment confirmed')}>
                  Confirm Payment
                </Button>
              </div>
            </>
          )}

          {currentStep === 0 && (
            <Button variant="outline" className="w-full mt-4">
              <Heart className="mr-2 h-4 w-4" /> Add to Favorites
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  )
}