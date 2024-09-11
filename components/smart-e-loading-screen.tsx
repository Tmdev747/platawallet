'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, ArrowRight, X } from 'lucide-react'

const steps = ['Select Product', 'Confirmation']

const productCategories = [
  'Smart prepaid and Smartbro',
  'Flexiload',
  'TNT',
  'Meralco',
  'PLDT',
  'Cignal',
  'Entertainment offers',
  'Freebee E-PIN',
  'Gaming PIN',
  'GSAT E-PIN',
  'Cignal E-PIN'
]

const productTypes = [
  'IDD Load',
  'All out surf',
  'Giga Video',
  'Giga TriNet',
  'GIGA STORIES',
  'GIGA GAMES',
  'Sulit Surf Plus',
  'Call & Text Combo',
  'Text Unlimited',
  'Flexi Call & Text Abroad',
  'Giga Power',
  'Unli Data',
  'Unli Fam'
]

export function SmartELoadingScreen() {
  const [currentStep, setCurrentStep] = useState(0)
  const [productCategory, setProductCategory] = useState('')
  const [productType, setProductType] = useState('')
  const [productName, setProductName] = useState('')
  const [description, setDescription] = useState('')
  const [walletFee, setWalletFee] = useState('')
  const [amount, setAmount] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [pinCode, setPinCode] = useState('')

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
          <CardTitle className="text-xl font-bold">Smart eLoading</CardTitle>
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
                <div className="space-y-2">
                  <Label htmlFor="productCategory">Product Category:</Label>
                  <Select onValueChange={setProductCategory}>
                    <SelectTrigger id="productCategory">
                      <SelectValue placeholder="Choose..." />
                    </SelectTrigger>
                    <SelectContent>
                      {productCategories.map((category) => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="productType">Product Type:</Label>
                  <Select onValueChange={setProductType}>
                    <SelectTrigger id="productType">
                      <SelectValue placeholder="Choose..." />
                    </SelectTrigger>
                    <SelectContent>
                      {productTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="productName">Product Name:</Label>
                  <Select onValueChange={setProductName}>
                    <SelectTrigger id="productName">
                      <SelectValue placeholder="Choose..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Flexi Call & Text Abroad 50">Flexi Call & Text Abroad 50</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description:</Label>
                  <Input id="description" value={description} onChange={(e) => setDescription(e.target.value)} readOnly />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="walletFee">Wallet Fee:</Label>
                  <Input id="walletFee" value={walletFee} onChange={(e) => setWalletFee(e.target.value)} readOnly />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount:</Label>
                  <Input id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobileNumber">Mobile Number:</Label>
                  <Input id="mobileNumber" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} placeholder="Enter mobile number" />
                </div>
              </div>
              <div className="mt-6 flex justify-between">
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
                <h3 className="font-bold">Purchase Confirmation</h3>
                <p>Please make sure that all details are correct.</p>
                <div className="space-y-2">
                  <p><span className="font-semibold">Product Category:</span> {productCategory}</p>
                  <p><span className="font-semibold">Product Type:</span> {productType}</p>
                  <p><span className="font-semibold">Product Name:</span> {productName}</p>
                  <p><span className="font-semibold">Mobile Number:</span> {mobileNumber}</p>
                  <p><span className="font-semibold">Description:</span> {description}</p>
                  <p><span className="font-semibold">Wallet Fee:</span> {walletFee}</p>
                  <p><span className="font-semibold">Amount:</span> {amount}</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pinCode">ENTER PINCODE</Label>
                  <div className="flex justify-between">
                    {[...Array(6)].map((_, index) => (
                      <Input
                        key={index}
                        type="password"
                        maxLength={1}
                        className="w-10 text-center"
                        value={pinCode[index] || ''}
                        onChange={(e) => {
                          const newPinCode = pinCode.split('')
                          newPinCode[index] = e.target.value
                          setPinCode(newPinCode.join(''))
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 flex justify-between">
                <Button variant="outline" onClick={handlePrevious}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
                <Button onClick={() => console.log('Purchase confirmed')}>
                  Confirm Purchase
                </Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}