import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeftIcon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ReportElement } from "@/components/report-element"
import { mockReports, mockReportElements } from "@/lib/mock-data"
import { ThemeToggle } from "@/components/theme-toggle"
import { StrategicTickers } from "@/components/strategic-tickers"

export default async function ReportDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const report = mockReports.find((r) => r.id === id)
  const elements = mockReportElements[id] || []

  if (!report) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date)
  }

  const getElementTypeBadge = (category: string) => {
    const badges: Record<string, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
      business_forecast: { label: "Business Forecast", variant: "default" },
      operations: { label: "Operations", variant: "secondary" },
      regulatory: { label: "Regulatory", variant: "destructive" },
      technology: { label: "Technology", variant: "outline" },
    }
    return badges[category] || { label: category, variant: "outline" }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                <Image
                  src="/cyberlogix-new-logo.jpeg"
                  alt="CyberLogix.ai"
                  width={240}
                  height={44}
                  className="h-11 w-auto"
                />
              </Link>
              <Link
                href="/"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors border-l pl-4"
              >
                <ArrowLeftIcon className="h-4 w-4" />
                Back to Reports
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/professional-executive-manager-portrait.jpg" alt="Janusz Trucker" />
                  <AvatarFallback>JT</AvatarFallback>
                </Avatar>
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">Janusz Trucker</p>
                  <p className="text-xs text-muted-foreground">Operations Manager</p>
                  <p className="text-xs text-muted-foreground">Big Trucking Corp Ltd. • NIP: 314159265</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-border">
            <StrategicTickers />
          </div>
        </div>
      </header>

      {/* Report Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-6 py-8">
          <div className="max-w-4xl">
            <p className="text-sm text-muted-foreground mb-3">{formatDate(report.created_at)}</p>
            <h1 className="text-3xl font-bold text-foreground mb-4 text-balance">{report.title}</h1>
            <p className="text-base text-muted-foreground leading-relaxed text-pretty">{report.summary}</p>
          </div>
        </div>
      </div>

      {/* Report Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {elements.map((element: any, index: number) => {
              const badge = getElementTypeBadge(element.category)
              return <ReportElement key={element.id} element={element} badge={badge} index={-1} />
            })}
          </div>

          {elements.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No report elements available</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
