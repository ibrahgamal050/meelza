"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log('Submitted email:', email)
    toast({
      title: "Subscribed!",
      description: "We'll keep you updated on our launch.",
    })
    setEmail('')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 p-4">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Meelza
          </h1>
          <p className="mt-2 text-xl font-semibold text-gray-600">Coming Soon</p>
        </div>
        <p className="text-xl text-gray-600">
          We're cooking up something special. Stay tuned for a revolutionary new platform!
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full"
          />
          <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
            Notify Me
          </Button>
        </form>
      </div>
      <footer className="mt-16 text-sm text-gray-500">
        © 2023 Meelza. All rights reserved.
      </footer>
    
    </div>
  )
}