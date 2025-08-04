import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Wrench, 
  Droplets, 
  Thermometer, 
  Zap, 
  Home, 
  Building, 
  AlertTriangle, 
  Clock,
  CheckCircle,
  Star
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Services | O.R.E. Plumbing - Northern Utah",
  description: "Professional plumbing services including emergency repairs, drain cleaning, water heater installation, and more. Serving residential and commercial customers in Northern Utah.",
  keywords: "plumbing services, emergency plumbing, drain cleaning, water heater, pipe repair, Utah plumber",
};

const services = [
  {
    id: "residential-new-install",
    title: "New Residential Installation",
    description: "Complete plumbing systems for new construction, major renovations, and whole-house repipes.",
    icon: Building,
    color: "bg-indigo-600",
    features: ["New Construction", "Whole House Repipes", "System Design", "Code Compliance"],
    href: "/services/residential-new-install",
    pricing: "$8,000 - $20,000+"
  },
  {
    id: "commercial",
    title: "Commercial Plumbing",
    description: "Comprehensive plumbing services for businesses, restaurants, and commercial properties.",
    icon: Building,
    color: "bg-gray-600",
    features: ["Preventive Maintenance", "Code Compliance", "Large Scale Repairs", "Emergency Service"],
    href: "/services/commercial",
    pricing: "$2,000 - $15,000+"
  },
  {
    id: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    description: "Complete bathroom plumbing for remodels and renovations.",
    icon: Home,
    color: "bg-purple-500",
    features: ["Fixture Installation", "Rough-in Plumbing", "ADA Compliance", "Modern Upgrades"],
    href: "/services/bathroom-remodeling",
    pricing: "$3,000 - $8,000+"
  },
  {
    id: "water-softeners",
    title: "Water Softener Installation",
    description: "Professional water softener installation, repair, and maintenance services.",
    icon: Droplets,
    color: "bg-cyan-500",
    features: ["System Installation", "Water Testing", "Maintenance", "Salt Delivery"],
    href: "/services/water-softeners",
    pricing: "$1,200 - $3,500+"
  },
  {
    id: "water-heater",
    title: "Water Heater Services",
    description: "Installation, repair, and maintenance of all water heater types including tankless systems.",
    icon: Thermometer,
    color: "bg-orange-500",
    features: ["Tank & Tankless", "Installation", "Repair & Maintenance", "Energy Efficiency"],
    href: "/services/water-heater",
    pricing: "$800 - $4,000+"
  },
  {
    id: "pipe-repair",
    title: "Pipe Repair & Installation",
    description: "Complete pipe services including repairs, replacements, and new installations.",
    icon: Wrench,
    color: "bg-green-500",
    features: ["Leak Detection", "Pipe Replacement", "Repiping", "Pipe Insulation"],
    href: "/services/pipe-repair",
    pricing: "$200 - $2,000+"
  },
  {
    id: "drain-cleaning",
    title: "Drain Cleaning",
    description: "Professional drain cleaning and unclogging for all types of drains and sewer lines.",
    icon: Droplets,
    color: "bg-blue-500",
    features: ["Hydro Jetting", "Snake Services", "Camera Inspection", "Preventive Maintenance"],
    href: "/services/drain-cleaning",
    pricing: "$150 - $800+"
  },
  // {
  //   id: "emergency-repairs",
  //   title: "Emergency Repairs",
  //   description: "24/7 emergency plumbing services for burst pipes, major leaks, and urgent repairs.",
  //   icon: AlertTriangle,
  //   color: "bg-red-500",
  //   features: ["24/7 Availability", "Rapid Response", "Emergency Diagnostics", "Temporary Fixes"],
  //   href: "/services/emergency-repairs",
  //   pricing: "$200 - $1,500+"
  // }
];

const whyChooseUs = [
  "Licensed & Insured",
  // "24/7 Emergency Service",
  "Upfront Pricing",
  "Satisfaction Guarantee",
  "Local Northern Utah Company",
  "Experienced Technicians"
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 mt-10">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Star className="w-4 h-4 mr-2" />
              Professional Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Complete Plumbing Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              From emergency repairs to complete system installations, we provide comprehensive 
              plumbing solutions for residential and commercial customers throughout Northern Utah.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get Free Estimate</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:4358903316">
                  <Clock className="w-4 h-4 mr-2" />
                  Call for Service
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a complete range of plumbing services to meet all your needs, 
              from routine maintenance to complex installations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.id} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      {service.pricing && (
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {service.pricing}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" asChild>
                      <Link href={service.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 md:py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose O.R.E. Plumbing?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the highest quality plumbing services with 
              professionalism, reliability, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-center p-4 bg-background rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                <span className="font-medium text-foreground">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Plumbing Services?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contact us today for a free estimate or emergency service. 
              Our experienced technicians are ready to help with any plumbing challenge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get Free Estimate</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:4358903316">Call (435) 890-3316</a>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
