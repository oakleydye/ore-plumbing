import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Wrench, 
  Droplets, 
  Search, 
  Shield, 
  Clock,
  CheckCircle,
  Star,
  Zap,
  Home,
  AlertTriangle,
  Thermometer,
  Eye
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pipe Repair & Installation | O.R.E. Plumbing - Northern Utah",
  description: "Professional pipe repair, replacement, and installation services. Leak detection, repiping, burst pipe repair, and more in Northern Utah.",
  keywords: "pipe repair, pipe replacement, leak detection, repiping, burst pipe, Northern Utah plumber",
};

const pipeServices = [
  {
    title: "Leak Detection & Repair",
    icon: Search,
    description: "Advanced leak detection technology to find and repair hidden leaks quickly.",
    features: ["Electronic Leak Detection", "Thermal Imaging", "Minimal Excavation", "Preventive Solutions"],
    urgency: "emergency"
  },
  {
    title: "Pipe Replacement",
    icon: Wrench,
    description: "Complete pipe replacement for old, damaged, or corroded piping systems.",
    features: ["Modern Materials", "Trenchless Options", "Code Compliance", "Lifetime Warranty"],
    urgency: "standard"
  },
  {
    title: "Whole House Repiping",
    icon: Home,
    description: "Complete home repiping with modern materials and improved water pressure.",
    features: ["PEX & Copper Options", "Improved Water Quality", "Increased Home Value", "Comprehensive Warranty"],
    urgency: "planned"
  },
  {
    title: "Emergency Pipe Repairs",
    icon: AlertTriangle,
    description: "24/7 emergency service for burst pipes and major leaks.",
    features: ["24/7 Availability", "Rapid Response", "Temporary Repairs", "Water Damage Prevention"],
    urgency: "emergency"
  }
];

const pipeMaterials = [
  {
    material: "PEX (Cross-linked Polyethylene)",
    pros: ["Flexible & Durable", "Freeze Resistant", "Easy Installation", "Cost-Effective"],
    cons: ["Not UV Resistant", "Newer Technology"],
    bestFor: "New construction, repiping projects",
    lifespan: "50+ years"
  },
  {
    material: "Copper",
    pros: ["Long Lasting", "Heat Resistant", "Antimicrobial", "Proven Track Record"],
    cons: ["Higher Cost", "Corrosion in Acidic Water"],
    bestFor: "Hot water lines, long-term investment",
    lifespan: "50-70 years"
  },
  {
    material: "CPVC (Chlorinated PVC)",
    pros: ["Chemical Resistant", "Easy to Install", "Affordable", "Good for Hot Water"],
    cons: ["Brittleness Over Time", "Limited Temperature Range"],
    bestFor: "Hot water distribution, budget-friendly options",
    lifespan: "25-40 years"
  },
  {
    material: "PVC (Polyvinyl Chloride)",
    pros: ["Very Affordable", "Chemical Resistant", "Long Lasting", "Easy Repairs"],
    cons: ["Cold Water Only", "UV Sensitive"],
    bestFor: "Cold water lines, drainage systems",
    lifespan: "25-40 years"
  }
];

const commonPipeProblems = [
  {
    problem: "Burst Pipes",
    causes: ["Freezing temperatures", "Age and corrosion", "High water pressure", "Tree root intrusion"],
    symptoms: ["Water damage", "No water flow", "Wet spots", "High water bills"],
    solution: "Emergency pipe repair or replacement with freeze-resistant materials and proper insulation."
  },
  {
    problem: "Slow Leaks",
    causes: ["Joint failures", "Pinhole leaks", "Corrosion", "Poor installation"],
    symptoms: ["Water stains", "Mold growth", "Musty odors", "Higher water bills"],
    solution: "Advanced leak detection followed by targeted repairs or pipe replacement as needed."
  },
  {
    problem: "Low Water Pressure",
    causes: ["Mineral buildup", "Pipe corrosion", "Undersized pipes", "Multiple leaks"],
    symptoms: ["Weak shower flow", "Slow filling fixtures", "Poor appliance performance"],
    solution: "Pipe cleaning, replacement, or upsizing to restore optimal water pressure throughout your home."
  },
  {
    problem: "Discolored Water",
    causes: ["Pipe corrosion", "Mineral deposits", "Old galvanized pipes", "Bacterial growth"],
    symptoms: ["Brown/rusty water", "Metallic taste", "Staining fixtures", "Sediment buildup"],
    solution: "Pipe replacement with modern materials to ensure clean, safe water throughout your home."
  }
];

const processSteps = [
  {
    step: 1,
    title: "Inspection & Diagnosis",
    description: "Thorough assessment using advanced tools to identify all pipe issues.",
    tools: ["Camera inspection", "Leak detection equipment", "Pressure testing"]
  },
  {
    step: 2,
    title: "Detailed Estimate",
    description: "Comprehensive quote with material options and timeline.",
    includes: ["Material costs", "Labor breakdown", "Permit fees", "Warranty details"]
  },
  {
    step: 3,
    title: "Professional Installation",
    description: "Expert installation with minimal disruption to your daily routine.",
    features: ["Licensed technicians", "Code compliance", "Clean work area", "Quality testing"]
  },
  {
    step: 4,
    title: "Testing & Cleanup",
    description: "Complete system testing and thorough cleanup of work areas.",
    tests: ["Pressure testing", "Flow verification", "Leak detection", "Water quality check"]
  }
];

export default function PipeRepairPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-500/10 to-background py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Wrench className="w-4 h-4 mr-2" />
              Pipe Specialists
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Pipe Repair & Installation in <span className="text-primary">Northern Utah</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Expert pipe repair, replacement, and installation services using modern materials and advanced techniques. 
              From leak detection to complete repiping projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Clock className="w-4 h-4 mr-2" />
                Emergency Repair
              </Button>
              <Button size="lg" variant="outline">
                <Search className="w-4 h-4 mr-2" />
                Free Leak Detection
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pipe Services */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Pipe Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive pipe solutions from emergency repairs to complete system replacements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pipeServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${
                      service.urgency === 'emergency' ? 'bg-red-500/10' :
                      service.urgency === 'planned' ? 'bg-blue-500/10' : 'bg-green-500/10'
                    }`}>
                      <service.icon className={`w-6 h-6 ${
                        service.urgency === 'emergency' ? 'text-red-600' :
                        service.urgency === 'planned' ? 'text-blue-600' : 'text-green-600'
                      }`} />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      {service.urgency === 'emergency' && (
                        <Badge variant="destructive" className="text-xs">24/7 Available</Badge>
                      )}
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

      {/* Pipe Materials */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pipe Materials We Install</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We work with all modern pipe materials and help you choose the best option for your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pipeMaterials.map((material, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl text-green-600">{material.material}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Lifespan: {material.lifespan}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Advantages:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {material.pros.map((pro, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span>{pro}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Considerations:</h4>
                    <div className="space-y-1">
                      {material.cons.map((con, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0"></div>
                          <span>{con}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <p className="text-sm font-medium text-blue-800 dark:text-blue-200">Best For:</p>
                    <p className="text-sm text-blue-700 dark:text-blue-300">{material.bestFor}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Pipe Problems We Fix</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From emergency burst pipes to slow leaks, we handle all pipe-related issues.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {commonPipeProblems.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl text-red-600 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    {item.problem}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Common Causes:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {item.causes.map((cause, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                          <span>{cause}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Warning Signs:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {item.symptoms.map((symptom, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <Eye className="w-3 h-3 text-orange-500" />
                          <span>{symptom}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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

      {/* Process */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Pipe Repair Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional, systematic approach to ensure quality results and your satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <Card key={step.step} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {(step.tools || step.includes || step.features || step.tests)?.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-500" />
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Pipe Repair or Installation?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get professional pipe services with upfront pricing and guaranteed satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Emergency Service
            </Button>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
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
