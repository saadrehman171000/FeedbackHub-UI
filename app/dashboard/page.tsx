import { JobList } from "@/components/job-list"
import { DashboardHeader } from "@/components/dashboard-header"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader />
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Discover Opportunities</h1>
        <JobList />
      </main>
    </div>
  )
}

