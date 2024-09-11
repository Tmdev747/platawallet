'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownRight, Wallet, CreditCard, ShoppingCart } from 'lucide-react'

export function ComponentsHomeScreen() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to Platapay</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Wallet Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">₱10,000.00</p>
          <div className="mt-4 flex space-x-2">
            <Button className="flex-1">
              <ArrowUpRight className="mr-2 h-4 w-4" /> Top Up
            </Button>
            <Button className="flex-1" variant="outline">
              <ArrowDownRight className="mr-2 h-4 w-4" /> Withdraw
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
                <Wallet className="h-8 w-8 mb-2" />
                Send Money
              </Button>
              <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
                <CreditCard className="h-8 w-8 mb-2" />
                Pay Bills
              </Button>
              <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
                <Wallet className="h-8 w-8 mb-2" />
                Buy Load
              </Button>
              <Button variant="outline" className="h-24 flex flex-col items-center justify-center">
                <ShoppingCart className="h-8 w-8 mb-2" />
                Shop
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {[1, 2, 3].map((_, index) => (
                <li key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">Payment to John Doe</p>
                    <p className="text-sm text-muted-foreground">May 1, 2023</p>
                  </div>
                  <p className="font-semibold text-red-500">-₱500.00</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}