"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

const jobs = {
  "1": {
    title: "Senior Frontend Developer",
    company: "TechCorp",
  },
  "2": {
    title: "Product Designer",
    company: "DesignHub",
  },
  "3": {
    title: "Data Scientist",
    company: "AI Innovations",
  },
}

export function JobApplicationForm({ jobId }: { jobId: string }) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()
  const job = jobs[jobId as keyof typeof jobs]

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      router.push(`/application`)
    } catch (error) {
      setError("An error occurred while submitting your application. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (!job) {
    return (
      <Card>
        <CardContent className="pt-6">
          <Alert variant="destructive">
            <AlertDescription>Job not found</AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Apply for {job.title}</CardTitle>
        <CardDescription>at {job.company}</CardDescription>
      </CardHeader>
      <form onSubmit={onSubmit}>
        <CardContent className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="resume">Resume/CV</Label>
            <Input id="resume" type="file" accept=".pdf,.doc,.docx" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cover-letter">Cover Letter</Label>
            <Textarea 
              id="cover-letter" 
              rows={5} 
              placeholder="Why are you a good fit for this position?" 
              required 
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full bg-purple-600 hover:bg-purple-700" 
            type="submit" 
            disabled={isLoading}
          >
            {isLoading ? "Submitting application..." : "Submit Application"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

