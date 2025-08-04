import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Droplets, 
  Wrench, 
  Shield, 
  Clock,
  CheckCircle,
  Star,
  Bath,
  ShowerHead,
  Zap,
  Thermometer,
  Users,
  DollarSign,
  Ruler
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Plumbing | O.R.E. Plumbing - Northern Utah",
  description: "Professional bathroom remodeling plumbing services. Fixture installation, rough-in plumbing, ADA compliance, and modern bathroom upgrades in Northern Utah.",
  keywords: "bathroom remodeling, plumbing fixtures, rough-in plumbing, ADA bathroom, Northern Utah, bathroom renovation",
};

const remodelingServices = [
  {
    title: "Complete Rough-In Plumbing",
    icon: Wrench,
    description: "New plumbing infrastructure for complete bathroom renovations.",
    features: ["Water Supply Lines", "Drain & Vent Installation", "Fixture Placement", "Code Compliance"],
    timeframe: "2-3 days"
  },
  {
    title: "Fixture Installation",
    icon: Bath,
    description: "Professional installation of all bathroom fixtures and appliances.",
    features: ["Toilets & Bidets", "Sinks & Faucets", "Showers & Tubs", "Water-Saving Options"],
    timeframe: "1-2 days"
  },
  {
    title: "ADA Compliance Upgrades",
    icon: Users,
    description: "Accessible bathroom modifications meeting ADA requirements.",
    features: ["Grab Bar Installation", "Walk-in Showers", "Comfort Height Fixtures", "Wide Door Access"],
    timeframe: "1-3 days"
  },
  {
    title: "Luxury Upgrades",
    icon: Star,
    description: "High-end plumbing features for luxury bathroom experiences.",
    features: ["Steam Showers", "Heated Floors", "Smart Toilets", "Rain Shower Systems"],
    timeframe: "2-4 days"
  }
];

const popularFixtures = [
  {
    category: "Toilets",
    options: ["Standard Height", "Comfort Height", "Wall-Mounted", "Smart Toilets"],
    features: ["Water-Efficient", "Soft-Close Seats", "Dual-Flush Options", "Easy Clean Design"],
    priceRange: "$200 - $2,000+"
  },
  {
    category: "Showers & Tubs",
    options: ["Walk-in Showers", "Steam Showers", "Soaking Tubs", "Shower-Tub Combos"],
    features: ["Multiple Spray Options", "Thermostatic Controls", "Built-in Storage", "Safety Features"],
    priceRange: "$800 - $8,000+"
  },
  {
    category: "Sinks & Vanities",
    options: ["Pedestal Sinks", "Vanity Sinks", "Vessel Sinks", "Double Vanities"],
    features: ["Storage Solutions", "Water-Efficient Faucets", "LED Lighting", "Soft-Close Drawers"],
    priceRange: "$300 - $3,000+"
  },
  {
    category: "Faucets & Controls",
    options: ["Single Handle", "Widespread", "Wall-Mounted", "Touchless"],
    features: ["Water-Saving Technology", "Temperature Control", "Easy Maintenance", "Modern Finishes"],
    priceRange: "$100 - $1,500+"
  }
];

const remodelingPhases = [
  {
    phase: "Planning & Design",
    duration: "1-2 weeks",
    description: "Collaborate with your contractor to plan plumbing layout and fixture selection.",
    tasks: ["Site Assessment", "Plumbing Design", "Permit Applications", "Fixture Selection"]
  },
  {
    phase: "Demolition & Rough-In",
    duration: "3-5 days",
    description: "Remove old fixtures and install new plumbing infrastructure.",
    tasks: ["Safe Demolition", "New Supply Lines", "Drain Installation", "Vent System Setup"]
  },
  {
    phase: "Installation & Testing",
    duration: "2-3 days",
    description: "Install fixtures, test all connections, and ensure proper operation.",
    tasks: ["Fixture Installation", "Connection Testing", "Pressure Testing", "Final Adjustments"]
  },
  {
    phase: "Final Inspection",
    duration: "1 day",
    description: "Complete inspection and walkthrough to ensure everything meets standards.",
    tasks: ["Code Inspection", "Quality Check", "Customer Walkthrough", "Warranty Documentation"]
  }
];

const bathroomTrends = [
  {
    trend: "Water-Saving Fixtures",
    description: "Low-flow toilets, showerheads, and faucets that reduce water usage without compromising performance.",
    benefits: ["Lower Water Bills", "Environmental Friendly", "Utility Rebates Available", "Modern Technology"]
  },
  {
    trend: "Smart Bathroom Technology",
    description: "Connected fixtures with app control, voice activation, and automated features.",
    benefits: ["Remote Control", "Usage Monitoring", "Maintenance Alerts", "Energy Savings"]
  },
  {
    trend: "Accessible Design",
    description: "Universal design principles that work for users of all ages and abilities.",
    benefits: ["Future-Proofing", "Safety Features", "Increased Home Value", "Comfort for All"]
  },
  {
    trend: "Spa-Like Features",
    description: "Steam showers, heated floors, and luxury fixtures for a resort-like experience.",
    benefits: ["Relaxation", "Health Benefits", "Home Value", "Daily Luxury"]
  }
];

const designConsiderations = [
  "Water pressure requirements for multiple fixtures",
  "Proper ventilation for steam and moisture control",
  "Electrical needs for heated floors and smart fixtures",
  "Storage solutions integrated with plumbing layout",
  "Accessibility features for current and future needs",
  "Water-efficient fixtures to reduce utility costs"
];

export default function BathroomRemodelingPage() {
  return (
    <div className="min-h-screen pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-500/10 to-background py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 mt-10">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Home className="w-4 h-4 mr-2" />
              Bathroom Specialists
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Bathroom Remodeling Plumbing in <span className="text-primary">Northern Utah</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Professional plumbing services for bathroom renovations. From rough-in plumbing to luxury fixture 
              installation, we make your dream bathroom a reality with expert craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
                <Link href="/contact">
                  <Clock className="w-4 h-4 mr-2" />
                  Schedule Consultation
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  <Star className="w-4 h-4 mr-2" />
                  View Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Remodeling Services */}
      <section className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Bathroom Plumbing Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Complete plumbing solutions for bathroom remodeling projects of any size.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {remodelingServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-purple-500/10 rounded-lg">
                      <service.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {service.timeframe}
                      </Badge>
                    </div>
                  </div>
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

      {/* Popular Fixtures */}
      <section className="py-8 md:py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Bathroom Fixtures</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose from a wide range of high-quality fixtures to match your style and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {popularFixtures.map((fixture, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-purple-600">{fixture.category}</CardTitle>
                    <div className="flex items-center gap-2 text-sm font-semibold text-green-600">
                      <DollarSign className="w-4 h-4" />
                      {fixture.priceRange}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Available Options:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {fixture.options.map((option, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <Bath className="w-3 h-3 text-blue-500" />
                          <span>{option}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {fixture.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span>{feature}</span>
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

      {/* Remodeling Process */}
      <section className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bathroom Remodeling Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our systematic approach ensures your bathroom remodel is completed efficiently and to the highest standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {remodelingPhases.map((phase, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg">{phase.phase}</CardTitle>
                  <Badge variant="outline" className="text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {phase.duration}
                  </Badge>
                  <CardDescription>{phase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {phase.tasks.map((task, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bathroom Trends */}
      <section className="py-8 md:py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Bathroom Trends</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Stay current with the latest bathroom design and technology trends.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {bathroomTrends.map((trend, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl text-purple-600">{trend.trend}</CardTitle>
                  <CardDescription className="text-base">{trend.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {trend.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Design Considerations */}
      <section className="py-8 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Important Design Considerations</h2>
            <p className="text-lg text-muted-foreground">
              Key factors we consider when planning your bathroom plumbing layout.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {designConsiderations.map((consideration, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg shadow-sm">
                <Ruler className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span>{consideration}</span>
              </div>
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
              Experienced bathroom remodeling specialists you can trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Licensed & Insured Contractors",
              "Work with All Major Contractors",
              "Code Compliance Guaranteed",
              "Quality Fixture Installation",
              "ADA Compliance Specialists",
              "Warranty on All Work"
            ].map((reason, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-16 bg-gradient-to-r from-purple-600 to-purple-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Remodel Your Bathroom?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get professional plumbing services that bring your bathroom vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100" asChild>
              <Link href="/contact">
                <Clock className="w-4 h-4 mr-2" />
                Schedule Consultation
              </Link>
            </Button>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 w-full">
                <Home className="w-4 h-4 mr-2" />
                All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
