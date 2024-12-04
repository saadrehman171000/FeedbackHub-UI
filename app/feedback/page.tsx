import { DashboardHeader } from "@/components/dashboard-header"
import { FeedbackList } from "@/components/feedback-list"

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader />
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Application Feedback</h1>
        <FeedbackList />
      </main>
    </div>
  )
}

