import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Droplets, 
  Camera, 
  Zap, 
  CheckCircle,
  Home,
  Building,
  Wrench,
  Clock
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { generateMetadata, getLocalSEOKeywords } from "@/components/seo/metadata";

export const metadata: Metadata = generateMetadata({
  title: "Drain Cleaning Services Cache County | Logan, UT | O.R.E. Plumbing | Hydro Jetting",
  description: "Professional drain cleaning in Cache County, Utah. Hydro jetting, snake services, camera inspection for clogged drains & sewer lines. Serving Logan, North Logan, Hyde Park, Smithfield. Emergency service available.",
  keywords: getLocalSEOKeywords("drain cleaning"),
  canonical: "https://oreplumbing.com/services/drain-cleaning",
  openGraph: {
    title: "Expert Drain Cleaning Services | Cache County, Utah",
    description: "Professional drain cleaning and unclogging services in Cache County. Hydro jetting, camera inspection, and emergency drain service.",
    type: "website",
    url: "https://oreplumbing.com/services/drain-cleaning",
  },
});

const drainServices = [
  {
    title: "Hydro Jetting",
    description: "High-pressure water jetting to completely clear stubborn clogs and clean pipe walls.",
    icon: Zap,
    features: ["Removes grease buildup", "Clears tree roots", "Environmentally safe", "Long-lasting results"]
  },
  {
    title: "Drain Snake Services",
    description: "Professional drain snaking for routine clogs and blockages in all drain types.",
    icon: Wrench,
    features: ["Kitchen drains", "Bathroom drains", "Floor drains", "Laundry drains"]
  },
  {
    title: "Camera Inspection",
    description: "High-definition camera inspection to identify the exact location and cause of blockages.",
    icon: Camera,
    features: ["Precise diagnostics", "HD video footage", "Locate pipe damage", "Before/after documentation"]
  },
  {
    title: "Sewer Line Cleaning",
    description: "Complete main sewer line cleaning and maintenance to prevent backups.",
    icon: Home,
    features: ["Main line clearing", "Root removal", "Preventive maintenance", "Emergency service"]
  },
  {
    title: "Commercial Drain Service",
    description: "Specialized drain cleaning for restaurants, businesses, and commercial properties.",
    icon: Building,
    features: ["Grease trap service", "Floor drain maintenance", "Regular maintenance", "Code compliance"]
  },
  {
    title: "Preventive Maintenance",
    description: "Regular drain maintenance programs to prevent clogs and extend drain life.",
    icon: Clock,
    features: ["Scheduled service", "Drain treatments", "Early problem detection", "Cost savings"]
  }
];

const commonProblems = [
  {
    problem: "Slow Draining",
    solution: "We identify and clear partial blockages using appropriate tools and techniques."
  },
  {
    problem: "Recurring Clogs",
    solution: "Camera inspection reveals the root cause, allowing for permanent solutions."
  },
  {
    problem: "Bad Odors",
    solution: "Thorough cleaning removes bacteria and buildup causing unpleasant smells."
  },
  {
    problem: "Multiple Drain Issues",
    solution: "Main sewer line service addresses problems affecting multiple drains."
  }
];

const drainTypes = [
  "Kitchen Sink Drains",
  "Bathroom Sink Drains",
  "Shower & Tub Drains", 
  "Floor Drains",
  "Laundry Drains",
  "Main Sewer Lines",
  "Storm Drains",
  "Commercial Drains"
];

export default function DrainCleaningPage() {
  return (
    <div className="min-h-screen pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-background dark:from-blue-950/20 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 mt-10">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Droplets className="w-4 h-4 mr-2" />
              Professional Drain Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Expert Drain Cleaning Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Professional drain cleaning services using advanced equipment and techniques. 
              From routine maintenance to emergency clearing, we keep your drains flowing freely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Schedule Service</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:4358903316">Call (435) 890-3316</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Drain Cleaning Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We use the latest equipment and proven techniques to effectively clear any type of drain blockage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {drainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-8 md:py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Common Drain Problems We Solve</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experienced technicians can diagnose and resolve any drain issue quickly and effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonProblems.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">{item.problem}</CardTitle>
                  <CardDescription className="text-foreground font-medium">
                    {item.solution}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Drain Types */}
      <section className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Types of Drains We Service
              </h2>
              <p className="text-muted-foreground mb-8">
                Our professional drain cleaning services cover all types of drains in residential 
                and commercial properties. No drain problem is too big or too small.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {drainTypes.map((type, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="font-medium text-foreground">{type}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="p-8">
              <div className="text-center">
                <Droplets className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Need Drain Cleaning?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Don't let clogged drains disrupt your day. Our professional team provides 
                  fast, effective drain cleaning services.
                </p>
                <div className="space-y-3">
                  <Button size="lg" className="w-full" asChild>
                    <Link href="/contact">Schedule Service</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full" asChild>
                    <a href="tel:4358903316">Call for Emergency Service</a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-8 md:py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Drain Cleaning Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a systematic approach to ensure effective, long-lasting drain cleaning results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Assessment",
                description: "We evaluate the drain problem and determine the best cleaning method."
              },
              {
                step: 2,
                title: "Camera Inspection",
                description: "If needed, we use HD cameras to identify the exact location and cause."
              },
              {
                step: 3,
                title: "Professional Cleaning",
                description: "We use appropriate tools - snaking, hydro jetting, or other methods."
              },
              {
                step: 4,
                title: "Final Inspection",
                description: "We verify the drain is completely clear and flowing properly."
              }
            ].map((step) => (
              <Card key={step.step} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
