import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  Factory, 
  Store, 
  Utensils, 
  GraduationCap,
  Heart,
  Clock,
  CheckCircle,
  Star,
  Wrench,
  Shield,
  Zap,
  AlertTriangle,
  Users,
  Calendar,
  Phone
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Plumbing Services | O.R.E. Plumbing - Northern Utah",
  description: "Professional commercial plumbing services for restaurants, offices, schools, and healthcare facilities. Preventive maintenance, emergency repairs, and code compliance in Northern Utah.",
  keywords: "commercial plumbing, restaurant plumbing, office plumbing, emergency commercial repair, Northern Utah",
};

const commercialSectors = [
  {
    sector: "Restaurants & Food Service",
    icon: Utensils,
    description: "Specialized plumbing for kitchens, dining areas, and food prep facilities.",
    services: ["Grease Trap Maintenance", "Commercial Kitchen Plumbing", "Ice Machine Lines", "Dishwasher Connections"],
    challenges: ["Health Department Compliance", "Grease Management", "High-Volume Usage", "24/7 Operation Needs"]
  },
  {
    sector: "Office Buildings",
    icon: Building,
    description: "Reliable plumbing systems for office complexes and corporate facilities.",
    services: ["Restroom Maintenance", "Water Fountain Service", "HVAC Plumbing", "Tenant Improvements"],
    challenges: ["Minimal Disruption", "Code Compliance", "Energy Efficiency", "Tenant Satisfaction"]
  },
  {
    sector: "Schools & Universities",
    icon: GraduationCap,
    description: "Educational facility plumbing with focus on safety and durability.",
    services: ["Drinking Fountain Systems", "Locker Room Plumbing", "Laboratory Plumbing", "Cafeteria Systems"],
    challenges: ["Student Safety", "Vandal-Resistant Fixtures", "Budget Constraints", "Summer Maintenance Windows"]
  },
  {
    sector: "Healthcare Facilities",
    icon: Heart,
    description: "Critical plumbing systems for hospitals, clinics, and medical offices.",
    services: ["Medical Gas Systems", "Sterile Processing", "Patient Room Plumbing", "Emergency Shower Systems"],
    challenges: ["Infection Control", "Regulatory Compliance", "24/7 Reliability", "Specialized Equipment"]
  },
  {
    sector: "Retail & Shopping",
    icon: Store,
    description: "Plumbing solutions for retail stores, malls, and shopping centers.",
    services: ["Customer Restrooms", "Food Court Plumbing", "Janitorial Systems", "Tenant Build-Outs"],
    challenges: ["Customer Experience", "High Traffic Volume", "Diverse Tenant Needs", "Aesthetic Considerations"]
  },
  {
    sector: "Industrial & Manufacturing",
    icon: Factory,
    description: "Heavy-duty plumbing systems for industrial and manufacturing facilities.",
    services: ["Process Water Systems", "Waste Treatment", "Safety Showers", "Equipment Cooling"],
    challenges: ["Chemical Compatibility", "High Pressure Systems", "Environmental Compliance", "Production Continuity"]
  }
];

const commercialServices = [
  {
    title: "Preventive Maintenance Programs",
    description: "Scheduled maintenance to prevent costly emergencies and extend system life.",
    features: ["Regular Inspections", "Drain Cleaning", "Water Heater Service", "Fixture Maintenance"],
    benefits: ["Reduced Downtime", "Lower Repair Costs", "Extended Equipment Life", "Compliance Assurance"]
  },
  {
    title: "Emergency Repair Services",
    description: "24/7 emergency response for critical commercial plumbing issues.",
    features: ["24/7 Availability", "Rapid Response", "Emergency Shutoffs", "Temporary Solutions"],
    benefits: ["Minimize Business Impact", "Prevent Water Damage", "Quick Problem Resolution", "Priority Service"]
  },
  {
    title: "System Design & Installation",
    description: "Complete plumbing system design and installation for new construction and renovations.",
    features: ["Engineering Design", "Code Compliance", "Permit Management", "Quality Installation"],
    benefits: ["Optimized Performance", "Future-Proof Design", "Energy Efficiency", "Warranty Protection"]
  },
  {
    title: "Compliance & Inspections",
    description: "Ensure your plumbing systems meet all local, state, and federal requirements.",
    features: ["Code Compliance", "Health Department Standards", "ADA Requirements", "Environmental Regulations"],
    benefits: ["Avoid Violations", "Pass Inspections", "Reduce Liability", "Maintain Certifications"]
  }
];

const maintenancePrograms = [
  {
    program: "Basic Maintenance",
    frequency: "Quarterly",
    price: "$200-500/visit",
    includes: ["Visual Inspections", "Minor Adjustments", "Basic Drain Cleaning", "Water Pressure Testing"],
    bestFor: "Small offices, retail stores"
  },
  {
    program: "Standard Maintenance",
    frequency: "Monthly",
    price: "$500-1,200/visit",
    includes: ["Comprehensive Inspections", "Preventive Repairs", "Water Heater Service", "Fixture Maintenance"],
    bestFor: "Restaurants, schools, medium facilities"
  },
  {
    program: "Premium Maintenance",
    frequency: "Bi-weekly",
    price: "$1,200-2,500/visit",
    includes: ["Full System Analysis", "Predictive Maintenance", "Emergency Priority", "Detailed Reporting"],
    bestFor: "Hospitals, large manufacturing, critical facilities"
  },
  {
    program: "Custom Maintenance",
    frequency: "As Needed",
    price: "Custom Quote",
    includes: ["Tailored Service Plan", "Specialized Equipment", "Industry-Specific Compliance", "Flexible Scheduling"],
    bestFor: "Unique facilities with specialized needs"
  }
];

const emergencyResponse = [
  {
    priority: "Critical Emergency",
    responseTime: "30 minutes",
    description: "Life safety issues, major flooding, complete system failures",
    examples: ["Burst main lines", "Sewage backups", "Gas leaks", "Flooding"]
  },
  {
    priority: "High Priority",
    responseTime: "2 hours",
    description: "Significant operational impact, partial system failures",
    examples: ["Major leaks", "Heating system failure", "Multiple fixture problems"]
  },
  {
    priority: "Standard Priority",
    responseTime: "4-8 hours",
    description: "Limited operational impact, isolated issues",
    examples: ["Single fixture problems", "Minor leaks", "Pressure issues"]
  },
  {
    priority: "Scheduled Service",
    responseTime: "1-3 days",
    description: "Non-urgent repairs and improvements",
    examples: ["Fixture upgrades", "Preventive repairs", "Efficiency improvements"]
  }
];

const whyChooseCommercial = [
  "Licensed Commercial Plumbing Contractors",
  "24/7 Emergency Response Team",
  "Preventive Maintenance Programs",
  "Code Compliance Specialists",
  "Industry-Specific Experience",
  "Upfront Pricing & Contracts",
  "Insured & Bonded",
  "Local Northern Utah Company"
];

export default function CommercialPlumbingPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-600/10 to-background py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Building className="w-4 h-4 mr-2" />
              Commercial Specialists
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Commercial Plumbing Services in <span className="text-primary">Northern Utah</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Professional commercial plumbing solutions for businesses, restaurants, schools, and healthcare facilities. 
              24/7 emergency service, preventive maintenance, and code compliance expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gray-700 hover:bg-gray-800" asChild>
                <a href="tel:4358903316">
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency Service
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Maintenance
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Sectors */}
      <section className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Specialized plumbing solutions tailored to your industry's unique requirements and challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialSectors.map((sector, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-gray-600/10 rounded-lg">
                      <sector.icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <CardTitle className="text-lg">{sector.sector}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{sector.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Services:</h4>
                    <div className="space-y-1">
                      {sector.services.map((service, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Key Challenges:</h4>
                    <div className="space-y-1">
                      {sector.challenges.map((challenge, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                          <span>{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-8 md:py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Commercial Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive plumbing solutions designed for commercial and industrial applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {commercialServices.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-700">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">What's Included:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <Wrench className="w-3 h-3 text-blue-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Benefits:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Programs */}
      <section className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Preventive Maintenance Programs</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Customized maintenance programs to keep your commercial plumbing systems running smoothly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {maintenancePrograms.map((program, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-700">{program.program}</CardTitle>
                  <div className="space-y-2">
                    <Badge variant="outline">
                      <Calendar className="w-3 h-3 mr-1" />
                      {program.frequency}
                    </Badge>
                    <div className="text-lg font-semibold text-green-600">{program.price}</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {program.includes.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <p className="text-sm font-medium text-blue-800 dark:text-blue-200">Best For:</p>
                    <p className="text-xs text-blue-700 dark:text-blue-300">{program.bestFor}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Response */}
      <section className="py-8 md:py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Emergency Response Times</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Guaranteed response times based on the severity and impact of your plumbing emergency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {emergencyResponse.map((response, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className={`text-lg ${
                      response.priority === 'Critical Emergency' ? 'text-red-600' :
                      response.priority === 'High Priority' ? 'text-orange-600' :
                      response.priority === 'Standard Priority' ? 'text-yellow-600' : 'text-green-600'
                    }`}>
                      {response.priority}
                    </CardTitle>
                    <Badge className={`${
                      response.priority === 'Critical Emergency' ? 'bg-red-600' :
                      response.priority === 'High Priority' ? 'bg-orange-600' :
                      response.priority === 'Standard Priority' ? 'bg-yellow-600' : 'bg-green-600'
                    }`}>
                      <Clock className="w-3 h-3 mr-1" />
                      {response.responseTime}
                    </Badge>
                  </div>
                  <CardDescription>{response.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold mb-2">Examples:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {response.examples.map((example, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <AlertTriangle className="w-3 h-3 text-orange-500" />
                          <span>{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose O.R.E. Plumbing for Commercial Services?</h2>
            <p className="text-lg text-muted-foreground">
              Trusted commercial plumbing partner for businesses throughout Northern Utah.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {whyChooseCommercial.map((reason, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-16 bg-gradient-to-r from-gray-700 to-gray-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Commercial Plumbing Services?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get reliable commercial plumbing solutions with 24/7 emergency support and preventive maintenance programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-gray-700 hover:bg-gray-100" asChild>
              <a href="tel:4358903316">
                <Phone className="w-4 h-4 mr-2" />
                Call Now: Emergency Service
              </a>
            </Button>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-700 w-full">
                <Building className="w-4 h-4 mr-2" />
                All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
