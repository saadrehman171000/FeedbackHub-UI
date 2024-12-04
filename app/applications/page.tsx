import { DashboardHeader } from "@/components/dashboard-header"
import { ApplicationsList } from "@/components/application-list"

export default function ApplicationsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader />
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">My Applications</h1>
        <ApplicationsList />
      </main>
    </div>
  )
} 