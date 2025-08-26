import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Thermometer, 
  Zap, 
  Droplets, 
  DollarSign, 
  Shield, 
  Clock,
  CheckCircle,
  Star,
  Wrench,
  Battery,
  Flame,
  Snowflake
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Heater Services | O.R.E. Plumbing - Installation, Repair & Maintenance",
  description: "Professional water heater services in Northern Utah. Tank and tankless water heater installation, repair, replacement, and maintenance. Energy-efficient solutions.",
  keywords: "water heater installation, tankless water heater, water heater repair, Northern Utah, energy efficient, hot water",
};

const waterHeaterTypes = [
  {
    type: "Tankless Water Heaters",
    icon: Zap,
    description: "Energy-efficient, on-demand hot water systems that save space and money.",
    benefits: ["Endless Hot Water", "Energy Efficient", "Space Saving", "20+ Year Lifespan"],
    priceRange: "$2,500 - $4,500"
  },
  {
    type: "Traditional Tank Water Heaters",
    icon: Thermometer,
    description: "Reliable, cost-effective water heating solutions for homes and businesses.",
    benefits: ["Lower Upfront Cost", "Simple Installation", "Reliable Performance", "Easy Maintenance"],
    priceRange: "$800 - $2,000"
  },
  {
    type: "Hybrid Heat Pump",
    icon: Battery,
    description: "Ultra-efficient systems that use ambient air to heat water.",
    benefits: ["Maximum Efficiency", "Utility Rebates", "Environmental Friendly", "Long-term Savings"],
    priceRange: "$1,800 - $3,500"
  },
  {
    type: "Gas Water Heaters",
    icon: Flame,
    description: "Fast heating, cost-effective operation with natural gas or propane.",
    benefits: ["Quick Recovery", "Lower Operating Cost", "Reliable in Outages", "Even Heating"],
    priceRange: "$900 - $2,500"
  }
];

const services = [
  {
    title: "Water Heater Installation",
    description: "Professional installation of new water heaters with proper permits and code compliance.",
    features: ["Permit Handling", "Code Compliance", "Proper Sizing", "Warranty Protection"]
  },
  {
    title: "Water Heater Repair",
    description: "Diagnose and repair all water heater problems from no hot water to strange noises.",
    features: ["Diagnostic Service", "Element Replacement", "Thermostat Repair", "Leak Detection"]
  },
  {
    title: "Water Heater Replacement",
    description: "Complete replacement service with disposal of old unit and installation of new.",
    features: ["Old Unit Removal", "Upgrade Options", "Energy Efficiency", "Same-day Service"]
  },
  {
    title: "Maintenance & Tune-ups",
    description: "Regular maintenance to extend life and improve efficiency of your water heater.",
    features: ["Annual Inspections", "Anode Rod Replacement", "Flushing Service", "Efficiency Testing"]
  }
];

const commonProblems = [
  {
    problem: "No Hot Water",
    causes: ["Faulty heating element", "Broken thermostat", "Pilot light issues", "Electrical problems"],
    solution: "Our technicians quickly diagnose the cause and provide efficient repairs or replacements."
  },
  {
    problem: "Insufficient Hot Water",
    causes: ["Undersized unit", "Sediment buildup", "Faulty thermostat", "Aging system"],
    solution: "We assess your hot water needs and recommend the right size unit or necessary repairs."
  },
  {
    problem: "Water Too Hot or Cold",
    causes: ["Thermostat settings", "Faulty temperature sensor", "Mixing valve issues"],
    solution: "Professional calibration and component replacement to achieve optimal temperature."
  },
  {
    problem: "Strange Noises",
    causes: ["Sediment buildup", "Heating element issues", "Tank expansion", "Scale accumulation"],
    solution: "Thorough flushing, component replacement, and system optimization."
  }
];

const whyChooseUs = [
  "Licensed & Insured Water Heater Specialists",
  "Same-Day Emergency Service Available",
  "Upfront Pricing with No Hidden Fees",
  "All Major Brands Serviced",
  "Energy Efficiency Consultations",
  "Warranty on All Work"
];

export default function WaterHeaterServicesPage() {
  return (
    <div className="min-h-screen pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-500/10 to-background py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 mt-10">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Thermometer className="w-4 h-4 mr-2" />
              Water Heater Specialists
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Water Heater Services in <span className="text-primary">Northern Utah</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Professional water heater installation, repair, and maintenance services. 
              Tank, tankless, and hybrid systems from trusted brands with guaranteed satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
                <Link href="/contact">
                  <Clock className="w-4 h-4 mr-2" />
                  Schedule Service
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  <Shield className="w-4 h-4 mr-2" />
                  Get Free Estimate
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Water Heater Types */}
      <section className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Water Heater Types We Install</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From traditional tank systems to modern tankless units, we install and service all types of water heaters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {waterHeaterTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-orange-500/10 rounded-lg">
                      <type.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">{type.type}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      {type.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-green-600" />
                        <span className="font-semibold">{type.priceRange}</span>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/contact">Learn More</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-8 md:py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Water Heater Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive water heater solutions from installation to emergency repairs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Water Heater Problems</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We diagnose and fix all water heater issues quickly and efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {commonProblems.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl text-orange-600">{item.problem}</CardTitle>
                  <CardDescription className="font-semibold">Common Causes:</CardDescription>
                  <div className="space-y-1">
                    {item.causes.map((cause, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span>{cause}</span>
                      </div>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <p className="text-sm font-medium text-green-800 dark:text-green-200">Our Solution:</p>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-1">{item.solution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 md:py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose O.R.E. Plumbing?</h2>
            <p className="text-lg text-muted-foreground">
              Trusted water heater specialists serving Northern Utah with excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-16 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Water Heater Service?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get fast, reliable water heater installation, repair, and maintenance services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
              <a href="tel:4358903316">
                <Clock className="w-4 h-4 mr-2" />
                Emergency Service
              </a>
            </Button>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 w-full">
                <Wrench className="w-4 h-4 mr-2" />
                All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
