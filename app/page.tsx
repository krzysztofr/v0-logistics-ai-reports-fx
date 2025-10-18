import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TruckIcon, TrendingDownIcon, ArrowUpIcon, ArrowDownIcon } from "lucide-react"
import { mockReports, mockReportElements } from "@/lib/mock-data"
import { ThemeToggle } from "@/components/theme-toggle"

export default async function ReportsListPage() {
  const reports = mockReports

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date)
  }

  const getCategoryBadgeClass = (category: string) => {
    const classes: Record<string, string> = {
      business_forecast: "gradient-primary text-white border-0",
      operations: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      regulatory: "bg-red-500/10 text-red-400 border-red-500/20",
      technology: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    }
    return classes[category] || "bg-muted text-muted-foreground"
  }

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      business_forecast: "Business Forecast",
      operations: "Operations",
      regulatory: "Regulatory",
      technology: "Technology",
    }
    return labels[category] || category
  }

  const getReportTickers = (reportId: string) => {
    const tickersByReport: Record<string, Array<{ label: string; value: string; change: number }>> = {
      "1": [
        { label: "M&A Activity", value: "€8.5B", change: 340 },
        { label: "Market Consolidation", value: "23 deals", change: 85 },
        { label: "Valuation Premium", value: "+18%", change: 12 },
      ],
      "2": [
        { label: "Fuel Efficiency", value: "+8.2%", change: 8.2 },
        { label: "Route Optimization ROI", value: "12mo", change: -15 },
        { label: "On-Time Delivery", value: "+5%", change: 5 },
      ],
      "3": [
        { label: "Compliance Deadline", value: "Q2 2026", change: 0 },
        { label: "Encryption Mandate", value: "100%", change: 68 },
        { label: "Max Penalty", value: "€10M", change: 100 },
      ],
      "4": [
        { label: "AV Deployment", value: "3-5 yrs", change: -12 },
        { label: "Safety Improvement", value: "+40%", change: 40 },
        { label: "Labor Cost Reduction", value: "-25%", change: -25 },
      ],
      "5": [
        { label: "Transit Delays", value: "+7 days", change: -140 },
        { label: "Freight Rate Surge", value: "+20%", change: 20 },
        { label: "Border Wait Time", value: "48hrs", change: -200 },
      ],
      "6": [
        { label: "Automation ROI", value: "18mo", change: -25 },
        { label: "Labor Cost Savings", value: "-35%", change: -35 },
        { label: "Throughput Gain", value: "+40%", change: 40 },
      ],
      "7": [
        { label: "CSRD Scope", value: "50k cos", change: 355 },
        { label: "Reporting Deadline", value: "FY2025", change: 0 },
        { label: "Max Fine", value: "€500k", change: 100 },
      ],
      "8": [
        { label: "Digital Twin ROI", value: "12-18mo", change: -30 },
        { label: "Downtime Reduction", value: "-40%", change: -40 },
        { label: "Maintenance Accuracy", value: "+30%", change: 30 },
      ],
      "9": [
        { label: "Amazon Market Share", value: "30%", change: 150 },
        { label: "Pricing Pressure", value: "-15%", change: -15 },
        { label: "Competitive Threat", value: "High", change: 85 },
      ],
      "10": [
        { label: "Driver Turnover", value: "-20%", change: -20 },
        { label: "Retention Cost Savings", value: "€4k/driver", change: -40 },
        { label: "Satisfaction Score", value: "+25%", change: 25 },
      ],
    }
    return tickersByReport[reportId] || []
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/cyberlogix-logo.jpeg"
                alt="CyberLogix.ai"
                width={280}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <div className="flex flex-col items-end gap-1">
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <p className="text-sm font-semibold text-foreground">Janusz Trucker</p>
                    <p className="text-xs text-muted-foreground">Operations Manager</p>
                  </div>
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/professional-executive-manager-portrait.jpg" alt="Janusz Trucker" />
                    <AvatarFallback>JT</AvatarFallback>
                  </Avatar>
                </div>
                <p className="text-xs text-muted-foreground">Big Trucking Corp Ltd. • NIP: 314159265</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Intelligence Reports</h2>
          <p className="text-muted-foreground">
            AI-powered insights across Business Forecast, Operations, Regulatory, and Technology
          </p>
        </div>

        <div className="grid gap-6">
          {reports.map((report) => {
            const elements = mockReportElements[report.id] || []
            const tickers = getReportTickers(report.id)

            return elements.map((element: any) => (
              <Card key={element.id} className="hover:shadow-lg hover:shadow-primary/10 transition-all border-border">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <Badge className={getCategoryBadgeClass(element.category)}>
                      {getCategoryLabel(element.category)}
                    </Badge>
                    {report.isNew && (
                      <Badge variant="secondary" className="shrink-0 gradient-primary text-white border-0">
                        New
                      </Badge>
                    )}
                  </div>

                  {tickers.length > 0 && (
                    <div className="mb-4 pb-4 border-b border-border">
                      <p className="text-xs font-semibold text-muted-foreground mb-2">Strategic Insight:</p>
                      <div className="flex flex-wrap gap-3">
                        {tickers.map((ticker, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-xs">
                            <span className="text-muted-foreground">{ticker.label}:</span>
                            <span className="font-semibold text-foreground">{ticker.value}</span>
                            {ticker.change !== 0 && (
                              <span
                                className={`flex items-center gap-0.5 ${ticker.change > 0 ? "text-green-500" : "text-red-500"}`}
                              >
                                {ticker.change > 0 ? (
                                  <ArrowUpIcon className="h-2.5 w-2.5" />
                                ) : (
                                  <ArrowDownIcon className="h-2.5 w-2.5" />
                                )}
                                <span className="text-[10px]">{Math.abs(ticker.change)}%</span>
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link href={`/report/${report.id}#${element.id}`} className="cursor-pointer">
                    <CardTitle className="text-xl font-bold mb-2 text-balance hover:text-primary transition-colors">
                      {element.title}
                    </CardTitle>
                  </Link>
                  <CardDescription className="text-sm text-muted-foreground">
                    {formatDate(report.created_at)} • {report.title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed text-pretty line-clamp-3">
                    {element.summary}
                  </p>

                  <div className="flex items-center gap-2 pt-2">
                    <Link href={`/report/${report.id}#${element.id}`} className="cursor-pointer">
                      <Button
                        variant="default"
                        size="sm"
                        className="gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold shadow-md"
                      >
                        <div className="relative h-4 w-4">
                          <TruckIcon className="h-4 w-4 absolute" />
                          <TrendingDownIcon className="h-3 w-3 absolute -bottom-0.5 -right-0.5 text-red-300" />
                        </div>
                        Check the impact
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))
          })}
        </div>
      </main>
    </div>
  )
}
