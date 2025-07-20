import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Award, 
  Clock, 
  Shield,
  CheckCircle,
  Star,
  Phone,
  MapPin,
  Wrench,
  Heart,
  Target,
  Eye,
  ThumbsUp
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About O.R.E. Plumbing | Professional Plumbers in Northern Utah",
  description: "Learn about O.R.E. Plumbing's mission, values, and commitment to excellence in residential and commercial plumbing services throughout Northern Utah.",
  keywords: "about O.R.E. Plumbing, Northern Utah plumbers, professional plumbing services, licensed plumbers",
};

const companyValues = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We conduct business with honesty, transparency, and ethical practices in every interaction."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest quality workmanship and exceed customer expectations on every job."
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description: "Your satisfaction is our priority. We listen, understand, and deliver solutions that work."
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "Dependable service when you need it most, with 24/7 emergency availability."
  }
];

const whyChooseUs = [
  {
    title: "Licensed & Insured",
    description: "Fully licensed plumbing contractors with comprehensive insurance protection.",
    icon: Shield
  },
  {
    title: "Local Northern Utah Company",
    description: "Proud to serve our community with personalized, local service and support.",
    icon: MapPin
  },
  {
    title: "24/7 Emergency Service",
    description: "Round-the-clock availability for plumbing emergencies and urgent repairs.",
    icon: Clock
  },
  {
    title: "Upfront Pricing",
    description: "Transparent, honest pricing with no hidden fees or surprise charges.",
    icon: ThumbsUp
  },
  {
    title: "Quality Workmanship",
    description: "Expert craftsmanship backed by warranties and guaranteed satisfaction.",
    icon: Award
  },
  {
    title: "Modern Equipment",
    description: "State-of-the-art tools and technology for efficient, effective repairs.",
    icon: Wrench
  }
];

const serviceAreas = [
  "Logan", "Cache Valley", "Preston", "Smithfield", "Hyde Park", 
  "North Logan", "River Heights", "Nibley", "Millville", "Providence"
];

const certifications = [
  "State of Utah Licensed Plumbing Contractor",
  "Fully Bonded and Insured",
  "Better Business Bureau Member",
  "Local Chamber of Commerce Member",
  "Continuing Education Certified",
  "EPA Lead-Safe Certified"
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <Badge variant="outline" className="mb-4">
                <Users className="w-4 h-4 mr-2" />
                About Us
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Your Trusted <span className="text-primary">Northern Utah</span> Plumbing Experts
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                O.R.E. Plumbing is a locally owned and operated plumbing company dedicated to providing 
                exceptional service to residential and commercial customers throughout Northern Utah.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:4358903316">
                  <Button size="lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Call (435) 890-3316
                  </Button>
                </a>
                <Link href="/services">
                  <Button size="lg" variant="outline">
                    <Wrench className="w-4 h-4 mr-2" />
                    Our Services
                  </Button>
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/logo.webp"
                alt="O.R.E. Plumbing professional service"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-8 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl md:text-3xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-center leading-relaxed">
                At O.R.E. Plumbing, our mission is to provide high-quality plumbing services with a 
                steadfast commitment to excellence, customer satisfaction, and dependable availability. 
                We prioritize precision workmanship and uphold the highest industry standards to ensure 
                lasting results for every client. Our business is built on strong, trust-based relationships 
                with both residential and commercial customers, with a goal to continue to grow bigger. 
                We aim to establish ourselves as a trusted and enduring presence in the plumbing industry.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-8 md:py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These values guide everything we do and shape how we serve our customers and community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose O.R.E. Plumbing?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're more than just plumbers – we're your trusted partners for all your plumbing needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <reason.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">{reason.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas & Certifications */}
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
                  We proudly serve communities throughout Northern Utah
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">{area}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <p className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">
                    Don't see your area listed?
                  </p>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Contact us to see if we service your location. We're always expanding our coverage area.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-6 h-6 text-primary" />
                  <CardTitle className="text-2xl">Licenses & Certifications</CardTitle>
                </div>
                <CardDescription>
                  Fully licensed, bonded, and insured for your protection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-green-600" />
                      <span className="text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <p className="text-sm font-medium text-green-800 dark:text-green-200 mb-2">
                    Licensed & Insured
                  </p>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    We maintain all required licenses and carry comprehensive insurance to protect 
                    you, your property, and our team.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-8 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Commitment to You</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be Northern Utah's most trusted and respected plumbing company, 
                  known for exceptional service and customer satisfaction.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ThumbsUp className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Customer Satisfaction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We're not satisfied until you're completely happy with our work. 
                  Your satisfaction is our guarantee.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Community Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  As a local business, we're invested in our community and committed 
                  to building lasting relationships with our neighbors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience the O.R.E. Difference?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today for reliable, professional plumbing services you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:4358903316">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Phone className="w-4 h-4 mr-2" />
                Call (435) 890-3316
              </Button>
            </a>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-accent hover:bg-white hover:text-primary">
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
