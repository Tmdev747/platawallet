'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Smartphone, CreditCard, SendHorizontal, Wallet, ShoppingCart, QrCode, Bell } from 'lucide-react'

const quickActions = [
  { name: 'Send', icon: SendHorizontal },
  { name: 'Pay Bills', icon: CreditCard },
  { name: 'Load', icon: Smartphone },
  { name: 'Scan', icon: QrCode },
]

const recentTransactions = [
  { id: 1, type: 'Send', amount: -500, recipient: 'John Doe' },
  { id: 2, type: 'Receive', amount: 1000, sender: 'Jane Smith' },
  { id: 3, type: 'Bill Payment', amount: -750, biller: 'Electric Company' },
  { id: 4, type: 'Load', amount: -100, provider: 'Mobile Network' },
]

export function HomeScreen() {
  return (
    <div className="container mx-auto p-4 max-w-md">
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-lg font-bold">Welcome, User</h1>
            <p className="text-sm text-muted-foreground">Your PlataPay Account</p>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <Bell className="h-6 w-6" />
        </Button>
      </header>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">₱10,000.00</p>
          <div className="flex space-x-2 mt-4">
            <Button className="flex-1">Cash In</Button>
            <Button className="flex-1" variant="outline">Cash Out</Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {quickActions.map((action, index) => (
          <Button key={index} variant="outline" className="flex flex-col items-center p-2 h-auto">
            <action.icon className="h-6 w-6 mb-1" />
            <span className="text-xs">{action.name}</span>
          </Button>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="in">Money In</TabsTrigger>
              <TabsTrigger value="out">Money Out</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <ScrollArea className="h-[200px]">
                {recentTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex justify-between items-center py-2 border-b">
                    <div>
                      <p className="font-medium">{transaction.type}</p>
                      <p className="text-sm text-muted-foreground">
                        {transaction.recipient || transaction.sender || transaction.biller || transaction.provider}
                      </p>
                    </div>
                    <p className={`font-bold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {transaction.amount > 0 ? '+' : ''}₱{Math.abs(transaction.amount).toFixed(2)}
                    </p>
                  </div>
                ))}
              </ScrollArea>
            </TabsContent>
            <TabsContent value="in">
              {/* Filter for money in transactions */}
            </TabsContent>
            <TabsContent value="out">
              {/* Filter for money out transactions */}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}