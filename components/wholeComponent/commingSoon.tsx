"use client"

import { useState } from "react"
import { Bell } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ComingSoon() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your server
    console.log("Submitted email:", email)
    alert("Thanks for subscribing!")
    setEmail("")
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#6C5DD3] p-4 text-center text-white">
      <h1 className="mb-4 text-4xl font-bold sm:text-6xl">Coming Soon</h1>
      <p className="mb-8 max-w-md text-xl opacity-80">
        We're working on something exciting. Stay tuned!
      </p>
      <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-grow bg-white/10 text-white placeholder-white/50"
        />
        <Button type="submit" className="bg-white text-[#6C5DD3] hover:bg-white/90">
          <Bell className="mr-2 h-4 w-4" />
          Notify Me
        </Button>
      </form>
    </div>
  )
}

