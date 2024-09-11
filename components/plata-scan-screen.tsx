'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { QrCode, Camera } from 'lucide-react'
import ResponsiveLayout from './ResponsiveLayout'

export function PlataScanScreen() {
  const [amount, setAmount] = useState('')
  const [scannedCode, setScannedCode] = useState('')

  const handleScan = () => {
    // In a real application, this would activate the device's camera
    // and scan a QR code. For this example, we'll simulate a scan.
    setScannedCode('PLATA-1234567890')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Processing payment:', { scannedCode, amount })
    // Here you would typically handle the payment processing
  }

  return (
    <ResponsiveLayout>
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Scan & Pay</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="qrCode">QR Code</Label>
              <div className="flex space-x-2">
                <Input
                  id="qrCode"
                  placeholder="Scanned QR Code"
                  value={scannedCode}
                  readOnly
                  className="flex-grow"
                />
                <Button type="button" onClick={handleScan}>
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
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
          <Button onClick={handleSubmit} className="w-full" disabled={!scannedCode || !amount}>
            <QrCode className="mr-2 h-4 w-4" /> Pay
          </Button>
        </CardFooter>
      </Card>
    </ResponsiveLayout>
  )
}