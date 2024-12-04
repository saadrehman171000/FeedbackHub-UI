import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const feedbackItems = [
  {
    id: 1,
    position: "Senior Frontend Developer",
    company: "TechCorp",
    date: "2024-01-03",
    feedback: "Strong technical skills demonstrated in the application. Consider providing more specific examples of project impact in future applications.",
    rating: "Positive"
  },
  {
    id: 2,
    position: "Product Designer",
    company: "DesignHub",
    date: "2024-01-01",
    feedback: "Excellent portfolio and communication skills. Moving forward with next interview round.",
    rating: "Very Positive"
  }
]

export function FeedbackList() {
  return (
    <div className="space-y-4">
      {feedbackItems.map((item) => (
        <Card key={item.id}>
          <CardHeader>
            <CardTitle className="text-xl font-bold">{item.position} at {item.company}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Feedback Date</span>
                <span>{item.date}</span>
              </div>
              <div className="space-y-2">
                <span className="text-sm text-muted-foreground">Feedback</span>
                <p className="text-sm">{item.feedback}</p>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Overall Rating</span>
                <span className="font-medium text-green-600">{item.rating}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

