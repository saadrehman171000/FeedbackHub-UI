import { DashboardHeader } from "@/components/dashboard-header"
import { JobDetails } from "@/components/job-details"

export default function JobDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader />
      <main className="container mx-auto py-8">
        <JobDetails id={params.id} />
      </main>
    </div>
  )
}

