"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    salary: "$120k - $150k",
    type: "Full-time",
    posted: "2 days ago",
    feedback_rate: "95%",
  },
  {
    id: 2,
    title: "Product Designer",
    company: "DesignHub",
    location: "New York, NY",
    salary: "$90k - $120k",
    type: "Full-time",
    posted: "1 day ago",
    feedback_rate: "88%",
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "AI Innovations",
    location: "San Francisco, CA",
    salary: "$130k - $160k",
    type: "Full-time",
    posted: "3 days ago",
    feedback_rate: "92%",
  },
]

export function JobList() {
  const router = useRouter()

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl text-purple-700">{job.title}</CardTitle>
                <CardDescription className="text-gray-600 font-medium">{job.company}</CardDescription>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                {job.feedback_rate}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {job.location}
              </div>
              <div className="flex items-center text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                </svg>
                {job.salary}
              </div>
              <div className="flex items-center text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                {job.type}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <div className="text-sm text-gray-500">{job.posted}</div>
            <Button 
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => router.push(`/jobs/${job.id}/apply`)}
            >
              Apply Now
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

