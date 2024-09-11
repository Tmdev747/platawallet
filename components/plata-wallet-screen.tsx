'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownRight, CreditCard, Smartphone } from 'lucide-react'
import ResponsiveLayout from './ResponsiveLayout'

export function PlataWalletScreen() {
  const transactions = [
    { id: 1, type: 'Top Up', amount: 1000, date: '2023-05-01', status: 'Completed' },
    { id: 2, type: 'Transfer', amount: -500, date: '2023-05-02', status: 'Completed' },
    { id: 3, type: 'Bill Payment', amount: -750, date: '2023-05-03', status: 'Pending' },
  ]

  return (
    <ResponsiveLayout>
      <div className="space-y-6">
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

        <Card>
          <CardHeader>
            <CardTitle>Linked Accounts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <CreditCard className="mr-2 h-4 w-4" /> Link Bank Account
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Smartphone className="mr-2 h-4 w-4" /> Link Mobile Number
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
              {transactions.map((transaction) => (
                <li key={transaction.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{transaction.type}</p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${transaction.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {transaction.amount > 0 ? '+' : ''}₱{Math.abs(transaction.amount).toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500">{transaction.status}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Button variant="link" className="mt-4 w-full">View All Transactions</Button>
          </CardContent>
        </Card>
      </div>
    </ResponsiveLayout>
  )
}