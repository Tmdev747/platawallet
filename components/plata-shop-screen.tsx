'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ShoppingCart, Search } from 'lucide-react'
import Image from 'next/image'
import ResponsiveLayout from './ResponsiveLayout'

const categories = ['Electronics', 'Clothing', 'Home & Living', 'Beauty', 'Books']

const products = [
  { id: 1, name: 'Smartphone', price: 15000, category: 'Electronics', image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 2, name: 'T-shirt', price: 500, category: 'Clothing', image: 'https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 3, name: 'Coffee Maker', price: 2500, category: 'Home & Living', image: 'https://images.pexels.com/photos/6206795/pexels-photo-6206795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 4, name: 'Face Cream', price: 800, category: 'Beauty', image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 5, name: 'Novel', price: 350, category: 'Books', image: 'https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 6, name: 'Headphones', price: 1200, category: 'Electronics', image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 7, name: 'Jeans', price: 1000, category: 'Clothing', image: 'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 8, name: 'Table Lamp', price: 750, category: 'Home & Living', image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
]

export function PlataShopScreen() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = products.filter(product => 
    (selectedCategory === '' || product.category === selectedCategory) &&
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <ResponsiveLayout>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>PlataShop</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <div className="flex-grow">
                <Input
                  placeholder="Search products"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <Button variant="outline">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-4">
              <Label htmlFor="category">Category</Label>
              <Select onValueChange={setSelectedCategory}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="flex flex-col">
              <CardHeader className="p-0">
                <div className="relative w-full pt-[100%]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-2xl font-bold">₱{product.price.toFixed(2)}</p>
                <p className="text-sm text-gray-500">{product.category}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </ResponsiveLayout>
  )
}