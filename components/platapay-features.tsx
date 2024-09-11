'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Smartphone, CreditCard, SendHorizontal, Wallet, ShoppingCart, QrCode, Globe, Building2, PiggyBank, ShieldCheck } from 'lucide-react'

const features = [
  { name: 'PlataPaload', icon: Smartphone, description: 'Purchase mobile credits with discounts' },
  { name: 'PlataBills', icon: CreditCard, description: 'Pay bills and set up recurring payments' },
  { name: 'PlataTransfer', icon: SendHorizontal, description: 'Send money domestically and internationally' },
  { name: 'PlataWallet', icon: Wallet, description: 'Store funds and manage your digital wallet' },
  { name: 'PlataShop', icon: ShoppingCart, description: 'Make online purchases and access exclusive offers' },
  { name: 'PlataScan', icon: QrCode, description: 'Make in-store payments using QR codes' },
  { name: 'PlataFX', icon: Globe, description: 'Hold and transact in multiple currencies' },
  { name: 'PlataGov', icon: Building2, description: 'Pay for government services and fees' },
  { name: 'PlataLoan', icon: PiggyBank, description: 'Apply for microloans and manage credit' },
  { name: 'PlataInsure', icon: ShieldCheck, description: 'Manage and pay for insurance premiums' },
]

export function PlatapayFeatures() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-primary">PlataPay Features</CardTitle>
        <CardDescription className="text-center text-secondary">Discover our unique financial solutions</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="grid" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="grid">Grid View</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
          </TabsList>
          <TabsContent value="grid">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {features.map((feature, index) => (
                <Card key={index} className="flex flex-col items-center p-4 hover:bg-secondary/10 transition-colors">
                  <feature.icon className="w-8 h-8 mb-2 text-primary" />
                  <h3 className="text-lg font-semibold text-center mb-1">{feature.name}</h3>
                  <p className="text-sm text-center text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="list">
            <ScrollArea className="h-[400px] mt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center p-4 hover:bg-secondary/10 transition-colors">
                  <feature.icon className="w-8 h-8 mr-4 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold">{feature.name}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </TabsContent>
        </Tabs>
        <div className="mt-6 text-center">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Explore All Features
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}