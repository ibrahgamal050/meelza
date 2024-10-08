'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ComingSoon() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log('Subscribed:', email)
    setSubscribed(true)
    setEmail('')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: "url('/placeholder.svg?height=1080&width=1920')"}}>
      <div className="max-w-md w-full space-y-8 p-10 bg-white bg-opacity-90 rounded-xl shadow-xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Meelza.com</h1>
          <h2 className="text-xl font-semibold text-gray-600">Coming Soon</h2>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            We're working hard to bring you something amazing. Stay tuned for updates!
          </p>
        </div>
        {!subscribed ? (
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <Input
              type="email"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Notify Me
            </Button>
          </form>
        ) : (
          <div className="mt-8 text-center text-green-600 font-semibold">
            Thank you for subscribing! We'll keep you updated.
          </div>
        )}
      </div>
    </div>
  )
}