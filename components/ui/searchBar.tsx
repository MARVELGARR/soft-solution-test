'use client'

import * as React from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

export default function Searchbar({ placeholder = 'Search...' }: { placeholder?: string }) {
  return (
    <div className="relative w-full max-w-sm">
      <Search className=" rounded-full  cursor-pointer  text-3xl hover:bg-gray-200/45  absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder={placeholder}
        className="pl-10 pr-4 h-[3rem] rounded-lg"
      />
    </div>
  )
}