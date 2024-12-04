import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const applications = [
  {
    id: 1,
    position: "Senior Frontend Developer",
    company: "TechCorp",
    status: "Under Review",
    appliedDate: "2024-01-03",
    feedback: "Pending"
  },
  {
    id: 2,
    position: "Product Designer",
    company: "DesignHub",
    status: "Interviewed",
    appliedDate: "2024-01-01",
    feedback: "Positive"
  },
  {
    id: 3,
    position: "Data Scientist",
    company: "AI Innovations",
    status: "Applied",
    appliedDate: "2024-01-05",
    feedback: "Pending"
  }
]

export function ApplicationsList() {
  return (
    <div className="space-y-4">
      {applications.map((application) => (
        <Card key={application.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-bold">{application.position}</CardTitle>
            <Badge 
              variant={application.status === "Under Review" ? "secondary" : 
                      application.status === "Interviewed" ? "outline" : "default"}
            >
              {application.status}
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Company</span>
                <span className="text-sm font-medium">{application.company}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Applied Date</span>
                <span className="text-sm font-medium">{application.appliedDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Feedback Status</span>
                <span className="text-sm font-medium">{application.feedback}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

