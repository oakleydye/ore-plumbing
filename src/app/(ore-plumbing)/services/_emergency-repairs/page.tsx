import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  AlertTriangle, 
  Clock, 
  Phone, 
  CheckCircle,
  Droplets,
  Zap,
  Home,
  Wrench
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Plumbing Repairs | 24/7 Service | O.R.E. Plumbing",
  description: "24/7 emergency plumbing services in Northern Utah. Fast response for burst pipes, major leaks, and urgent plumbing repairs. Call (435) 890-3316 now!",
  keywords: "emergency plumbing, 24/7 plumber, burst pipes, leak repair, urgent plumbing, Northern Utah emergency plumber",
};

const emergencyServices = [
  {
    title: "Burst Pipe Repair",
    description: "Immediate response to burst pipes to prevent water damage and restore your plumbing.",
    icon: Droplets
  },
  {
    title: "Major Leak Detection",
    description: "Quick identification and repair of major leaks in walls, floors, and underground.",
    icon: AlertTriangle
  },
  {
    title: "Sewer Line Backups",
    description: "Emergency sewer line clearing and repair to restore proper drainage.",
    icon: Home
  },
  {
    title: "Water Heater Failures",
    description: "Emergency water heater repair or replacement when your hot water stops working.",
    icon: Zap
  },
  {
    title: "Frozen Pipe Thawing",
    description: "Safe thawing of frozen pipes and prevention of future freezing issues.",
    icon: Wrench
  },
  {
    title: "Gas Line Emergencies",
    description: "Immediate response to gas line leaks and emergency shut-offs for safety.",
    icon: AlertTriangle
  }
];

const emergencySteps = [
  {
    step: 1,
    title: "Call Immediately",
    description: "Contact us at (435) 890-3316 for immediate emergency response."
  },
  {
    step: 2,
    title: "Emergency Assessment",
    description: "Our technician will quickly assess the situation and provide immediate solutions."
  },
  {
    step: 3,
    title: "Rapid Repair",
    description: "We'll perform emergency repairs to stop the immediate problem and prevent damage."
  },
  {
    step: 4,
    title: "Complete Solution",
    description: "Follow-up with permanent repairs and preventive measures as needed."
  }
];

export default function EmergencyRepairsPage() {
  return (
    <div className="min-h-screen pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-50 to-background dark:from-red-950/20 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 mt-10">
          <div className="text-center mb-12">
            <Badge variant="destructive" className="mb-4">
              <Clock className="w-4 h-4 mr-2" />
              24/7 Emergency Service
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Emergency Plumbing Repairs
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              When plumbing emergencies strike, every minute counts. Our experienced technicians 
              provide rapid response 24/7 to minimize damage and restore your plumbing systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
                <a href="tel:4358903316">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now: (435) 890-3316
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Request Emergency Service</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Emergency Services We Handle</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our emergency plumbing team is equipped to handle any urgent plumbing situation, 
              day or night.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-red-500 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency Process */}
      <section className="py-8 md:py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Emergency Response Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              When you call for emergency service, here's what you can expect from our professional team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencySteps.map((step) => (
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

      {/* Features */}
      <section className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Why Choose Our Emergency Service?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">24/7 Availability</h3>
                    <p className="text-muted-foreground">
                      Our emergency line is always staffed, ensuring immediate response when you need it most.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Rapid Response Time</h3>
                    <p className="text-muted-foreground">
                      Most emergency calls are responded to within 60 minutes in our service area.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Fully Equipped Vehicles</h3>
                    <p className="text-muted-foreground">
                      Our emergency trucks carry specialized tools and parts for immediate repairs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Experienced Technicians</h3>
                    <p className="text-muted-foreground">
                      All our emergency technicians are licensed, insured, and experienced in crisis situations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="p-8 bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
              <div className="text-center">
                <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Plumbing Emergency?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Don't wait - emergency plumbing issues can cause extensive damage. 
                  Call now for immediate assistance.
                </p>
                <Button size="lg" className="w-full bg-red-600 hover:bg-red-700" asChild>
                  <a href="tel:4358903316">
                    <Phone className="w-4 h-4 mr-2" />
                    Emergency Line: (435) 890-3316
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-8 md:py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Related Services</h2>
            <p className="text-muted-foreground">
              Explore our other plumbing services for comprehensive maintenance and repairs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Pipe Repair & Installation</CardTitle>
                <CardDescription>Complete pipe services including leak detection and replacement.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <Link href="/services/pipe-repair">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Drain Cleaning</CardTitle>
                <CardDescription>Professional drain cleaning and sewer line maintenance.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <Link href="/services/drain-cleaning">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Water Heater Service</CardTitle>
                <CardDescription>Installation, repair, and maintenance of all water heater types.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <Link href="/services/water-heater">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
