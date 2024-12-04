import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function JobDetails({ id }: { id: string }) {
  // In a real application, you would fetch the job details based on the id
  const job = {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "Remote",
    salary: "$120k - $150k",
    type: "Full-time",
    posted: "2 days ago",
    feedback_rate: "95%",
    description: "We are seeking a talented Senior Frontend Developer to join our dynamic team. The ideal candidate will have a strong background in React, TypeScript, and modern web technologies. You will be responsible for building and maintaining high-performance, reusable, and reliable user interfaces for our cutting-edge applications.",
    requirements: [
      "5+ years of experience in frontend development",
      "Expert knowledge of React, TypeScript, and state management libraries",
      "Experience with responsive design and cross-browser compatibility",
      "Strong understanding of web performance optimization techniques",
      "Excellent problem-solving skills and attention to detail",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Flexible work hours and remote-first culture",
      "Health, dental, and vision insurance",
      "401(k) plan with company match",
      "Professional development budget",
    ],
  }

  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-3xl text-purple-700">{job.title}</CardTitle>
            <CardDescription className="text-xl text-gray-600 font-medium">{job.company}</CardDescription>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-800 text-lg">
            {job.feedback_rate}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex space-x-4 text-gray-600">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {job.location}
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
            </svg>
            {job.salary}
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            {job.type}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Job Description</h3>
          <p className="text-gray-700">{job.description}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Requirements</h3>
          <ul className="list-disc pl-5 text-gray-700">
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Benefits</h3>
          <ul className="list-disc pl-5 text-gray-700">
            {job.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="text-sm text-gray-500">Posted {job.posted}</div>
        <Button className="bg-purple-600 hover:bg-purple-700">Apply for this position</Button>
      </CardFooter>
    </Card>
  )
}

