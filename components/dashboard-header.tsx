"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { UserNav } from "@/components/user-nav"

export function DashboardHeader() {
  const pathname = usePathname()

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/dashboard" className="text-xl font-bold text-purple-600">
            FeedbackHub
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link 
              href="/dashboard" 
              className={`text-sm ${pathname === '/dashboard' ? 'text-purple-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Jobs
            </Link>
            <Link 
              href="/application" 
              className={`text-sm ${pathname === '/application' ? 'text-purple-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
            >
              My Applications
            </Link>
            <Link 
              href="/feedback" 
              className={`text-sm ${pathname === '/feedback' ? 'text-purple-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Feedback
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline">Post a Job</Button>
          <UserNav />
        </div>
      </div>
    </header>
  )
}

