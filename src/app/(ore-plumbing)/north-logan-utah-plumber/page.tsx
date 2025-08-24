import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Clock, 
  Phone, 
  CheckCircle,
  Star,
  Wrench,
  Home,
  Building,
  Droplets,
  Thermometer
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import { generateMetadata, getLocalSEOKeywords } from "@/components/seo/metadata";
import { LocalBusinessSchema, ServicePageSchema } from "@/components/seo/structured-data";

export const metadata: Metadata = generateMetadata({
  title: "North Logan Utah Plumber | O.R.E. Plumbing | Emergency Plumbing Services",
  description: "Expert plumber in North Logan, Utah. 24/7 emergency plumbing services, drain cleaning, water heater repair, pipe repair & more. Licensed, insured & locally owned. Serving North Logan & Cache County.",
  keywords: `${getLocalSEOKeywords("plumber", "North Logan")}, North Logan Utah plumber, plumbing services North Logan UT, emergency plumber North Logan`,
  canonical: "https://oreplumbing.com/north-logan-utah-plumber",
  openGraph: {
    title: "North Logan Utah's Trusted Plumber | O.R.E. Plumbing",
    description: "Professional plumbing services in North Logan, Utah. Emergency repairs, drain cleaning, water heater installation & more.",
    type: "website",
    url: "https://oreplumbing.com/north-logan-utah-plumber",
  },
});

export default function NorthLoganPlumberPage() {
  return (
    <>
      <LocalBusinessSchema 
        address={{
          streetAddress: "",
          addressLocality: "North Logan",
          addressRegion: "Utah", 
          postalCode: "84341",
          addressCountry: "US"
        }}
        geo={{
          latitude: 41.7695,
          longitude: -111.8063
        }}
      />
      <ServicePageSchema
        serviceName="Plumbing Services North Logan Utah"
        serviceDescription="Professional plumbing services in North Logan, Utah including emergency repairs, drain cleaning, water heater services, and pipe repair."
        serviceUrl="https://oreplumbing.com/north-logan-utah-plumber"
        areaServed="North Logan, Utah"
      />

      <div className="min-h-screen pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-background py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 mt-10">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                North Logan, Utah
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                North Logan's Premier Plumbing Service
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Professional plumbing services in North Logan, Utah. From emergency repairs to 
                routine maintenance, O.R.E. Plumbing provides reliable, expert service to North Logan residents.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="tel:4358903316">
                    <Phone className="w-4 h-4 mr-2" />
                    Call (435) 890-3316
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Get Free Estimate</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services for North Logan */}
        <section className="py-8 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Expert Plumbing Services in North Logan</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive plumbing solutions for North Logan homes and businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Emergency Plumbing",
                  description: "24/7 emergency services for North Logan residents",
                  icon: Clock,
                  link: "/contact"
                },
                {
                  title: "Drain Cleaning",
                  description: "Professional drain cleaning and maintenance",
                  icon: Droplets,
                  link: "/services/drain-cleaning"
                },
                {
                  title: "Water Heater Services",
                  description: "Installation, repair and maintenance",
                  icon: Thermometer,
                  link: "/services/water-heater"
                },
                {
                  title: "Pipe Repair",
                  description: "Expert pipe repair and replacement",
                  icon: Wrench,
                  link: "/services/pipe-repair"
                },
                {
                  title: "Residential Plumbing",
                  description: "Complete home plumbing services",
                  icon: Home,
                  link: "/services"
                },
                {
                  title: "Commercial Plumbing",
                  description: "Business plumbing solutions",
                  icon: Building,
                  link: "/services/commercial"
                }
              ].map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Button asChild>
                        <Link href={service.link}>Learn More</Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* North Logan Specific Content */}
        <section className="py-8 md:py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Serving North Logan's Plumbing Needs
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Local North Logan Service
                </h3>
                <p className="text-muted-foreground">
                  As Cache County locals, we understand North Logan's unique plumbing challenges. 
                  From newer subdivisions to established neighborhoods, we provide tailored solutions 
                  for every North Logan property.
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Fast Response Times
                </h3>
                <p className="text-muted-foreground">
                  Located in Cache County, we can quickly respond to North Logan service calls. 
                  Whether it's an emergency or scheduled maintenance, we're here when you need us.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-8 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why North Logan Trusts O.R.E. Plumbing
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Licensed & Insured in Utah",
                "Local Cache County Company", 
                "24/7 Emergency Availability",
                "Upfront, Honest Pricing",
                "Quality Workmanship Guarantee",
                "Fast North Logan Response"
              ].map((reason, index) => (
                <div key={index} className="flex items-center p-4 bg-background rounded-lg shadow-sm">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                  <span className="font-medium text-foreground">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 md:py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Need a Plumber in North Logan?
              </h2>
              <p className="text-muted-foreground mb-8">
                Contact O.R.E. Plumbing today for reliable plumbing services in North Logan, Utah. 
                Licensed, insured, and ready to help with any plumbing challenge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="tel:4358903316">
                    <Phone className="w-4 h-4 mr-2" />
                    Call (435) 890-3316
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Schedule Service Online</Link>
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
