import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Wrench, 
  Shield,
  CheckCircle,
  AlertTriangle,
  DollarSign,
  Calendar,
  Phone,
  Star,
  Zap,
  Settings,
  Droplets,
  Building,
  ClipboardList
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import ContactForm from "@/app/_components/contact-form";

export const metadata: Metadata = {
  title: "New Residential Plumbing Installation | O.R.E. Plumbing - Northern Utah",
  description: "Complete residential plumbing installation for new construction and major renovations in Northern Utah. Professional rough-in and finish plumbing services.",
  keywords: "new construction plumbing, residential plumbing installation, rough-in plumbing, Northern Utah, Logan plumbing contractor",
};

const installationServices = [
  {
    icon: Building,
    title: "New Construction",
    description: "Complete plumbing systems for new home construction from foundation to finish."
  },
  {
    icon: Home,
    title: "Major Renovations",
    description: "Full plumbing system upgrades and relocations for home additions and remodels."
  },
  {
    icon: Settings,
    title: "Whole House Repipes",
    description: "Complete replacement of existing plumbing systems with modern materials."
  },
  {
    icon: Droplets,
    title: "Water Service Lines",
    description: "New water service connections from the street to your home."
  }
];

const installationPhases = [
  {
    phase: "1. Planning & Design",
    description: "Detailed plumbing layout design and permit acquisition",
    duration: "1-2 weeks",
    includes: [
      "Plumbing system design",
      "Permit applications",
      "Material specifications",
      "Code compliance review",
      "Timeline development"
    ]
  },
  {
    phase: "2. Rough-In Installation",
    description: "Installation of pipes, drains, and supply lines within walls",
    duration: "3-5 days",
    includes: [
      "Water supply lines",
      "Drain and vent pipes",
      "Gas line installation",
      "Fixture backing",
      "Pressure testing"
    ]
  },
  {
    phase: "3. Inspection & Testing",
    description: "City inspection and comprehensive system testing",
    duration: "1-2 days",
    includes: [
      "Rough-in inspection",
      "Pressure testing",
      "Code compliance check",
      "System documentation",
      "Issue resolution"
    ]
  },
  {
    phase: "4. Finish Installation",
    description: "Final fixture installation and system commissioning",
    duration: "2-3 days",
    includes: [
      "Fixture installation",
      "Water heater connection",
      "Final testing",
      "System startup",
      "Warranty documentation"
    ]
  }
];

const systemComponents = [
  {
    category: "Water Supply",
    items: [
      "Main water service line",
      "Water meter connection", 
      "Hot and cold distribution lines",
      "Shut-off valves",
      "Pressure regulators"
    ]
  },
  {
    category: "Drainage System",
    items: [
      "Main sewer connection",
      "Drain pipes and fittings",
      "Vent stack system",
      "Floor drains",
      "Cleanout access points"
    ]
  },
  {
    category: "Gas Lines",
    items: [
      "Natural gas service line",
      "Gas distribution piping",
      "Appliance connections",
      "Gas shut-off valves",
      "Leak testing"
    ]
  },
  {
    category: "Fixtures & Appliances",
    items: [
      "Kitchen sink and disposal",
      "Bathroom fixtures",
      "Laundry connections",
      "Water heater installation",
      "Hose bibs"
    ]
  }
];

const materialOptions = [
  {
    name: "PEX Piping",
    description: "Flexible, durable, and freeze-resistant modern piping",
    pros: ["Easy installation", "Freeze resistant", "Long-lasting", "Cost-effective"],
    bestFor: "Most residential applications"
  },
  {
    name: "Copper Piping", 
    description: "Traditional metal piping with excellent durability",
    pros: ["Very durable", "Heat resistant", "Antimicrobial", "Recyclable"],
    bestFor: "High-end installations and hot water lines"
  },
  {
    name: "PVC/ABS Drainage",
    description: "Standard plastic drainage and vent piping",
    pros: ["Lightweight", "Chemical resistant", "Easy to work with", "Affordable"],
    bestFor: "All drainage and vent applications"
  }
];

const whyChooseNewInstall = [
  "Modern, efficient plumbing systems",
  "Compliance with current building codes",
  "Improved water pressure and flow",
  "Energy-efficient hot water delivery",
  "Easier future maintenance access",
  "Increased home value",
  "25+ year system warranty",
  "Professional design and installation"
];

export default function ResidentialNewInstallPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Building className="w-4 h-4 mr-2" />
              New Construction Plumbing
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              New Residential <span className="text-primary">Plumbing Installation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Complete plumbing system design and installation for new construction, major renovations, 
              and whole-house repipes. Professional service from rough-in to finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  <ClipboardList className="w-4 h-4 mr-2" />
                  Get Project Quote
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:4358903316">
                  <Phone className="w-4 h-4 mr-2" />
                  Call (435) 890-3316
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Residential Plumbing Installation Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From new construction to complete system replacements, we handle all aspects of residential plumbing installation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {installationServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Installation Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We follow a systematic approach to ensure your new plumbing system is installed correctly and efficiently.
            </p>
          </div>

          <div className="grid gap-8">
            {installationPhases.map((phase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-primary">{phase.phase}</CardTitle>
                      <CardDescription className="text-base">{phase.description}</CardDescription>
                    </div>
                    <Badge variant="outline" className="self-start md:self-center">
                      {phase.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {phase.includes.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* System Components */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete System Installation</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We install every component of your plumbing system to ensure reliable, efficient operation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {systemComponents.map((component, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Wrench className="w-4 h-4 text-primary" />
                    </div>
                    {component.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {component.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Material Options */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quality Materials & Options</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We use only the highest quality materials and can help you choose the best options for your project.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {materialOptions.map((material, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{material.name}</CardTitle>
                  <CardDescription>{material.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Advantages:</h4>
                    <div className="space-y-1">
                      {material.pros.map((pro, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                          <span>{pro}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                      Best For: {material.bestFor}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose New Installation */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Star className="w-6 h-6 text-primary" />
                  <CardTitle className="text-2xl">Benefits of New Plumbing Installation</CardTitle>
                </div>
                <CardDescription>
                  Advantages of modern plumbing systems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {whyChooseNewInstall.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <DollarSign className="w-6 h-6 text-primary" />
                  <CardTitle className="text-2xl">Investment Information</CardTitle>
                </div>
                <CardDescription>
                  What to expect for your plumbing installation project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">New Construction</h4>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Complete plumbing systems typically range from $8,000 - $15,000 for average-sized homes.
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Whole House Repipe</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Complete system replacements range from $10,000 - $20,000 depending on home size and complexity.
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                    <h4 className="font-medium text-orange-800 dark:text-orange-200 mb-2">Financing Available</h4>
                    <p className="text-sm text-orange-700 dark:text-orange-300">
                      We offer flexible financing options to make your plumbing project more affordable.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Plumbing Project?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Contact us for a detailed consultation and project estimate. We'll help you plan the perfect plumbing system.
            </p>
          </div>
          
          <ContactForm 
            title="Get Your Project Estimate"
            description="Tell us about your plumbing installation project and we'll provide a detailed estimate and timeline."
            showContactInfo={false}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Plumbing Installation You Can Trust
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Licensed, insured, and experienced in all aspects of residential plumbing installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100" asChild>
              <a href="tel:4358903316">
                <Phone className="w-4 h-4 mr-2" />
                Call (435) 890-3316
              </a>
            </Button>
            <Link href="/services">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 w-full">
                <Star className="w-4 h-4 mr-2" />
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
