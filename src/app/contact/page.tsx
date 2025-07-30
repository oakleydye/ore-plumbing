import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Shield,
  Star,
  CheckCircle,
  AlertTriangle,
  Calendar,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import ContactForm from "@/app/_components/contact-form";

export const metadata: Metadata = {
  title: "Contact O.R.E. Plumbing | Get a Quote - Northern Utah",
  description:
    "Contact O.R.E. Plumbing for professional plumbing services in Northern Utah. 24/7 emergency service, free quotes, and fast response times.",
  keywords:
    "contact plumber, Northern Utah plumbing, emergency plumber, plumbing quote, O.R.E. Plumbing",
};

const contactMethods = [
  // {
  //   method: "Emergency Service",
  //   icon: AlertTriangle,
  //   primary: "(435) 890-3316",
  //   secondary: "24/7 Emergency Response",
  //   description:
  //     "For urgent plumbing emergencies like burst pipes, major leaks, or no hot water.",
  //   color: "bg-red-500",
  //   urgent: true,
  // },
  {
    method: "General Inquiries",
    icon: Phone,
    primary: "(435) 890-3316",
    secondary: "Mon-Fri 7AM-6PM",
    description: "For quotes, scheduling, and general plumbing questions.",
    color: "bg-blue-500",
    urgent: false,
  },
  {
    method: "Email",
    icon: Mail,
    primary: "info@oreplumbing.com",
    secondary: "Response within 4 hours",
    description:
      "For detailed project descriptions, photos, and non-urgent inquiries.",
    color: "bg-green-500",
    urgent: false,
  },
  {
    method: "Text Message",
    icon: MessageSquare,
    primary: "(435) 890-3316",
    secondary: "Quick responses",
    description:
      "Text us photos of plumbing issues for faster diagnosis and quotes.",
    color: "bg-purple-500",
    urgent: false,
  },
];

const serviceAreas = [
  "Logan",
  "Cache Valley",
  "Preston",
  "Smithfield",
  "Hyde Park",
  "North Logan",
  "River Heights",
  "Nibley",
  "Millville",
  "Providence",
  "Hyrum",
  "Wellsville",
  "Mendon",
  "Trenton",
  "Clarkston",
];

const responseTimeInfo = [
  {
    priority: "Emergency",
    time: "30 minutes",
    description: "Life safety issues, major flooding, burst pipes",
    examples: ["Burst water main", "Sewage backup", "No hot water in winter"],
  },
  {
    priority: "Urgent",
    time: "Same day",
    description: "Significant problems affecting daily life",
    examples: ["Leaky faucets", "Running toilets", "Slow drains"],
  },
  {
    priority: "Scheduled",
    time: "1-3 days",
    description: "Planned maintenance and non-urgent repairs",
    examples: ["Water heater maintenance", "Fixture upgrades", "Inspections"],
  },
];

const whyContactUs = [
  "Licensed & Insured Plumbing Contractors",
  // "24/7 Emergency Response Available",
  "Upfront Pricing - No Hidden Fees",
  "Same-Day Service for Most Issues",
  "Free Estimates on Major Projects",
  "Local Northern Utah Company",
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Professional Plumbing Help{" "}
              <span className="text-primary">Today</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Need a plumber in Northern Utah? We're here to help with emergency
              repairs, scheduled maintenance, and everything in between. Contact
              us for fast, reliable service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:4358903316">
                <Button size="lg" className="bg-primary">
                  <Phone className="w-4 h-4 mr-2" />
                  Call: (435) 890-3316
                </Button>
              </a>
              <a href="#contact-form">
                <Button size="lg" variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Service
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How to Reach Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the contact method that works best for your plumbing needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className={`h-full flex flex-col hover:shadow-lg transition-all duration-300 ${
                  method.urgent ? "border-red-200 dark:border-red-800" : ""
                }`}
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 ${method.color}/10 rounded-lg`}>
                      <method.icon
                        className={`w-6 h-6 text-white`}
                        style={{
                          color: method.color
                            .replace("bg-", "")
                            .replace("-500", ""),
                        }}
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{method.method}</CardTitle>
                      {method.urgent && (
                        <Badge variant="destructive" className="text-xs">
                          24/7
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <div className="space-y-3 flex-1">
                    <div>
                      <p className="font-semibold text-foreground">
                        {method.primary}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {method.secondary}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {method.description}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    className="w-full mt-4"
                    variant={method.urgent ? "destructive" : "default"}
                    asChild
                  >
                    {method.method === "Email" ? (
                      <a href={`mailto:${method.primary}`}>Send Email</a>
                    ) : method.method === "Text Message" ? (
                      <a href={`sms:${method.primary.replace(/[^\d]/g, "")}`}>
                        Send Text
                      </a>
                    ) : (
                      <a href={`tel:${method.primary.replace(/[^\d]/g, "")}`}>
                        Call Now
                      </a>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-8 md:py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Fill out the form below and we'll get back to you within 4 hours
              during business hours.
            </p>
          </div>

          <ContactForm
            title="Request Service or Quote"
            description="Tell us about your plumbing needs and we'll provide a prompt response with pricing and availability."
            showContactInfo={false}
          />
        </div>
      </section>

      {/* Response Times */}
      <section className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Response Times
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We guarantee fast response times based on the urgency of your
              plumbing needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {responseTimeInfo.map((info, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      info.priority === "Emergency"
                        ? "bg-red-500/10"
                        : info.priority === "Urgent"
                        ? "bg-orange-500/10"
                        : "bg-green-500/10"
                    }`}
                  >
                    <Clock
                      className={`w-8 h-8 ${
                        info.priority === "Emergency"
                          ? "text-red-600"
                          : info.priority === "Urgent"
                          ? "text-orange-600"
                          : "text-green-600"
                      }`}
                    />
                  </div>
                  <CardTitle className="text-xl">{info.priority}</CardTitle>
                  <div
                    className={`text-2xl font-bold ${
                      info.priority === "Emergency"
                        ? "text-red-600"
                        : info.priority === "Urgent"
                        ? "text-orange-600"
                        : "text-green-600"
                    }`}
                  >
                    {info.time}
                  </div>
                  <CardDescription>{info.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Examples:</p>
                    {info.examples.map((example, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-current rounded-full"></div>
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas & Why Contact Us */}
      <section className="py-8 md:py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Service Areas */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-6 h-6 text-primary" />
                  <CardTitle className="text-2xl">Service Areas</CardTitle>
                </div>
                <CardDescription>
                  We provide plumbing services throughout Northern Utah
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">{area}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <p className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">
                    Don't see your location?
                  </p>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Call us! We may still be able to serve your area or provide
                    referrals to trusted local plumbers.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Why Contact Us */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-6 h-6 text-primary" />
                  <CardTitle className="text-2xl">
                    Why Choose O.R.E. Plumbing?
                  </CardTitle>
                </div>
                <CardDescription>
                  Professional plumbing services you can trust
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {whyContactUs.map((reason, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-green-600" />
                      <span className="text-sm">{reason}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <p className="text-sm font-medium text-green-800 dark:text-green-200 mb-2">
                    Satisfaction Guaranteed
                  </p>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    We're not satisfied until you're completely happy with our
                    work. Quality workmanship and customer service are our top
                    priorities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for fast, professional plumbing services in
            Northern Utah.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:4358903316">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call (435) 890-3316
              </Button>
            </a>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-primary hover:bg-white hover:text-primary"
              >
                <Star className="w-4 h-4 mr-2" />
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
