import { JobApplicationForm } from "@/components/job-application-form"
import { DashboardHeader } from "@/components/dashboard-header"


export default function JobApplicationPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader />
      <main className="container mx-auto py-8">
        <JobApplicationForm jobId={params.id} />
      </main>
    </div>
  )
}

