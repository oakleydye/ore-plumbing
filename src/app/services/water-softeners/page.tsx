import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Droplets, 
  Shield, 
  Wrench,
  CheckCircle,
  AlertCircle,
  DollarSign,
  Calendar,
  Phone,
  Star,
  Zap,
  Home,
  Factory
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import ContactForm from "@/app/_components/contact-form";

export const metadata: Metadata = {
  title: "Water Softener Installation & Service | O.R.E. Plumbing - Northern Utah",
  description: "Professional water softener installation, repair, and maintenance in Northern Utah. Improve water quality, protect appliances, and reduce mineral buildup.",
  keywords: "water softener installation, water treatment, hard water solutions, Northern Utah, Logan plumbing, water conditioning",
};

const softenerBenefits = [
  {
    icon: Droplets,
    title: "Improved Water Quality",
    description: "Eliminate hard water minerals for cleaner, softer water throughout your home."
  },
  {
    icon: Shield,
    title: "Appliance Protection",
    description: "Extend the life of water heaters, dishwashers, and washing machines by preventing scale buildup."
  },
  {
    icon: Home,
    title: "Better Cleaning",
    description: "Soap works better, dishes are spot-free, and laundry comes out softer and brighter."
  },
  {
    icon: DollarSign,
    title: "Cost Savings",
    description: "Reduce energy bills and maintenance costs from mineral damage to appliances."
  }
];

const serviceTypes = [
  {
    title: "New Installation",
    description: "Complete water softener system installation with proper sizing and setup",
    price: "Starting at $1,200",
    features: [
      "Professional water testing",
      "System sizing consultation",
      "Complete installation",
      "Programming and setup",
      "1-year warranty"
    ]
  },
  {
    title: "System Repair",
    description: "Repair and maintenance of existing water softener systems",
    price: "Starting at $150",
    features: [
      "Diagnostic testing",
      "Component replacement",
      "Control valve repair",
      "Resin tank service",
      "Performance optimization"
    ]
  },
  {
    title: "Salt Delivery Service",
    description: "Regular salt delivery and system maintenance",
    price: "Starting at $45/month",
    features: [
      "Monthly salt delivery",
      "System inspection",
      "Settings adjustment",
      "Preventive maintenance",
      "Priority repair service"
    ]
  }
];

const systemTypes = [
  {
    name: "Ion Exchange Systems",
    description: "Traditional salt-based softeners that remove calcium and magnesium",
    bestFor: "Most effective for very hard water",
    capacity: "20,000 - 80,000 grains"
  },
  {
    name: "Salt-Free Conditioners",
    description: "Environmentally friendly systems that condition without removing minerals",
    bestFor: "Eco-conscious homeowners",
    capacity: "Whole house coverage"
  },
  {
    name: "Dual-Tank Systems",
    description: "Continuous soft water with alternating regeneration cycles",
    bestFor: "Large families or high water usage",
    capacity: "Unlimited soft water"
  }
];

const maintenanceTips = [
  "Check salt levels monthly and refill as needed",
  "Use high-quality salt pellets or crystals",
  "Schedule annual professional maintenance",
  "Monitor water hardness levels regularly",
  "Clean the brine tank annually",
  "Replace pre-filters as recommended"
];

export default function WaterSoftenersPage() {
  return (
    <div className="min-h-screen pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 mt-10">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Droplets className="w-4 h-4 mr-2" />
              Water Treatment Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Water Softener <span className="text-primary">Installation & Service</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Transform your hard water into clean, soft water that protects your appliances, 
              improves cleaning, and saves you money. Professional installation and service in Northern Utah.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Installation
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

      {/* Benefits Section */}
      <section className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Install a Water Softener?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hard water affects 85% of homes in the US. Here's how a water softener can help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {softenerBenefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 md:py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Water Softener Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From installation to ongoing maintenance, we provide comprehensive water treatment solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {serviceTypes.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {service.price}
                    </Badge>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" asChild>
                    <Link href="/contact">
                      Get Quote
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* System Types Section */}
      <section className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Water Softener Systems We Install</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We'll help you choose the right system based on your water quality, usage, and preferences.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {systemTypes.map((system, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{system.name}</CardTitle>
                  <CardDescription>{system.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                      Best For: {system.bestFor}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Factory className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Capacity: {system.capacity}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Signs You Need a Water Softener */}
      <section className="py-8 md:py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <AlertCircle className="w-6 h-6 text-orange-600" />
                  <CardTitle className="text-2xl">Signs You Have Hard Water</CardTitle>
                </div>
                <CardDescription>
                  Notice these issues? You likely need a water softener.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "White spots on dishes and glassware",
                    "Scale buildup on faucets and showerheads",
                    "Dry, itchy skin after showering",
                    "Dingy, stiff laundry",
                    "Reduced water heater efficiency",
                    "Soap scum that's hard to clean",
                    "Shortened appliance lifespan",
                    "Higher energy bills"
                  ].map((sign, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span className="text-sm">{sign}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Wrench className="w-6 h-6 text-primary" />
                  <CardTitle className="text-2xl">Maintenance Tips</CardTitle>
                </div>
                <CardDescription>
                  Keep your water softener running efficiently
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {maintenanceTips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                      <span className="text-sm">{tip}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <p className="text-sm font-medium text-green-800 dark:text-green-200 mb-2">
                    Professional Maintenance
                  </p>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Schedule annual service to ensure optimal performance and extend system life.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Improve Your Water Quality?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Contact us for a free water test and consultation. We'll recommend the best system for your needs.
            </p>
          </div>
          
          <ContactForm 
            title="Get Your Free Water Quality Assessment"
            description="Schedule your free water test and receive a customized recommendation for your home."
            showContactInfo={false}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience the Difference of Soft Water
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Professional water softener installation and service in Northern Utah.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100" asChild>
              <a href="tel:4358903316">
                <Phone className="w-4 h-4 mr-2" />
                Call (435) 890-3316
              </a>
            </Button>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary w-full">
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
