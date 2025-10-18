"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Circle } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const ROLES = [
  "CEO / Managing Director",
  "COO / Operations Director",
  "CFO / Finance Director",
  "CTO / Technology Director",
  "Supply Chain Manager",
  "Logistics Manager",
  "Compliance Officer",
  "Fleet Manager",
  "Other",
]

const CHALLENGES = [
  "Regulatory compliance and changing legislation",
  "Rising fuel and operational costs",
  "Driver shortage and retention",
  "Route optimization and efficiency",
  "Real-time visibility and tracking",
  "Cross-border logistics complexity",
  "Sustainability and emissions reduction",
  "Technology integration and digital transformation",
  "Supply chain disruptions",
  "Customer expectations and delivery speed",
  "Data security and cybersecurity",
  "Warehouse automation and capacity",
]

const TECH_LEVELS = [
  { value: 0, label: "Pen & Paper", description: "Manual processes, paper-based documentation" },
  { value: 1, label: "Basic Digital", description: "Excel spreadsheets, basic email communication" },
  { value: 2, label: "Integrated Systems", description: "ERP/TMS systems, some automation" },
  { value: 3, label: "Advanced Digital", description: "Cloud platforms, IoT sensors, data analytics" },
  { value: 4, label: "AI-Powered", description: "Machine learning, predictive analytics, full automation" },
]

export default function SignUpPage() {
  const [role, setRole] = useState("")
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([])
  const [otherChallenge, setOtherChallenge] = useState("")
  const [showOtherField, setShowOtherField] = useState(false)
  const [techLevel, setTechLevel] = useState([2])
  const [companyTaxId, setCompanyTaxId] = useState("")

  const toggleChallenge = (challenge: string) => {
    if (challenge === "Other") {
      setShowOtherField(!showOtherField)
      if (showOtherField) {
        setSelectedChallenges(selectedChallenges.filter((c) => c !== "Other"))
      } else {
        setSelectedChallenges([...selectedChallenges, "Other"])
      }
    } else {
      if (selectedChallenges.includes(challenge)) {
        setSelectedChallenges(selectedChallenges.filter((c) => c !== challenge))
      } else {
        setSelectedChallenges([...selectedChallenges, challenge])
      }
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", {
      role,
      challenges: showOtherField ? [...selectedChallenges, otherChallenge] : selectedChallenges,
      techLevel: TECH_LEVELS[techLevel[0]].label,
      companyTaxId,
    })
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                src="/cyberlogix-new-logo.jpeg"
                alt="CyberLogix.ai"
                width={320}
                height={80}
                className="h-16 w-auto cursor-pointer"
                priority
              />
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-balance">Predict, Prevent, Comply, and Stay Ahead</h1>
            <p className="text-xl text-muted-foreground text-balance">Automated insights aligned with your business</p>
          </div>

          {/* Value Proposition */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Continuous Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Research agents scan global logistics and regulatory sources 24/7 for relevant insights
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Personalized Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Editor agents create tailored reports verified by Editor-in-Chief agents for accuracy
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Actionable Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Security agents analyze impact on your company with integrated observability and risk monitoring
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sign Up Form */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Get Started with CyberLogix.ai</CardTitle>
              <CardDescription>
                Tell us about your company so we can deliver personalized intelligence reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Role Selection */}
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-base font-semibold">
                    What's your role in the company?
                  </Label>
                  <Select value={role} onValueChange={setRole}>
                    <SelectTrigger id="role">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      {ROLES.map((r) => (
                        <SelectItem key={r} value={r}>
                          {r}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Challenges Selection */}
                <div className="space-y-3">
                  <Label className="text-base font-semibold">What are your main challenges?</Label>
                  <p className="text-sm text-muted-foreground">Select all that apply</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {CHALLENGES.map((challenge) => (
                      <button
                        key={challenge}
                        type="button"
                        onClick={() => toggleChallenge(challenge)}
                        className={`flex items-start gap-3 p-3 rounded-lg border-2 transition-all text-left ${
                          selectedChallenges.includes(challenge)
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        {selectedChallenges.includes(challenge) ? (
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        ) : (
                          <Circle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                        )}
                        <span className="text-sm">{challenge}</span>
                      </button>
                    ))}
                    <button
                      type="button"
                      onClick={() => toggleChallenge("Other")}
                      className={`flex items-start gap-3 p-3 rounded-lg border-2 transition-all text-left ${
                        showOtherField ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                      }`}
                    >
                      {showOtherField ? (
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      ) : (
                        <Circle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                      )}
                      <span className="text-sm">Other</span>
                    </button>
                  </div>
                  {showOtherField && (
                    <Textarea
                      placeholder="Please describe your other challenges..."
                      value={otherChallenge}
                      onChange={(e) => setOtherChallenge(e.target.value)}
                      className="mt-3"
                      rows={3}
                    />
                  )}
                </div>

                {/* Tech Level Slider */}
                <div className="space-y-4">
                  <Label className="text-base font-semibold">Your company's technical advancement level</Label>
                  <div className="space-y-6">
                    <Slider value={techLevel} onValueChange={setTechLevel} max={4} step={1} className="w-full" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      {TECH_LEVELS.map((level, idx) => (
                        <div
                          key={idx}
                          className={`flex flex-col items-center text-center max-w-[80px] ${
                            techLevel[0] === idx ? "text-primary font-semibold" : ""
                          }`}
                        >
                          <span className="mb-1">{level.label}</span>
                        </div>
                      ))}
                    </div>
                    <Card className="bg-muted/50">
                      <CardContent className="pt-4">
                        <div className="flex items-start gap-3">
                          <Badge variant="secondary" className="shrink-0">
                            {TECH_LEVELS[techLevel[0]].label}
                          </Badge>
                          <p className="text-sm text-muted-foreground">{TECH_LEVELS[techLevel[0]].description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Company Tax ID */}
                <div className="space-y-2">
                  <Label htmlFor="taxId" className="text-base font-semibold">
                    Company Registration Number
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Enter your tax identification number (e.g., NIP for Poland, VAT ID for other EU countries)
                  </p>
                  <Input
                    id="taxId"
                    placeholder="e.g., PL1234567890, DE123456789, FR12345678901"
                    value={companyTaxId}
                    onChange={(e) => setCompanyTaxId(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    Examples: NIP (Poland), VAT ID (Germany: DE..., France: FR..., Italy: IT..., Spain: ES...)
                  </p>
                </div>

                {/* Submit Button */}
                <Button type="submit" size="lg" className="w-full gradient-primary text-white font-semibold">
                  Start Your Free Trial
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
