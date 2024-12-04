import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ApplicationStatus({ applicationId }: { applicationId: string }) {
  // In a real application, you would fetch the application status based on the applicationId
  const application = {
    id: applicationId,
    jobTitle: "Senior Frontend Developer",
    company: "TechCorp",
    status: "Under Review",
    appliedDate: "2023-05-15",
    lastUpdated: "2023-05-18",
    nextSteps: "We are currently reviewing your application and will contact you for an interview if your qualifications match our requirements.",
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Application Status</CardTitle>
        <CardDescription>Track the progress of your job application</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold">{application.jobTitle}</h3>
            <p className="text-gray-600">{application.company}</p>
          </div>
          <Badge variant="secondary" className="text-lg px-3 py-1">
            {application.status}
          </Badge>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Applied on:</span>
            <span>{application.appliedDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Last updated:</span>
            <span>{application.lastUpdated}</span>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Next Steps</h4>
          <p className="text-gray-700">{application.nextSteps}</p>
        </div>
      </CardContent>
    </Card>
  )
}

