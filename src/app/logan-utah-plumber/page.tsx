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
  title: "Logan Utah Plumber | O.R.E. Plumbing | Emergency Plumbing Services Logan, UT",
  description: "Expert plumber in Logan, Utah. 24/7 emergency plumbing services, drain cleaning, water heater repair, pipe repair & more. Licensed, insured & locally owned. Serving Logan & Cache County.",
  keywords: `${getLocalSEOKeywords("plumber", "Logan")}, Logan Utah plumber, plumbing services Logan UT, emergency plumber Logan`,
  canonical: "https://oreplumbing.com/logan-utah-plumber",
  openGraph: {
    title: "Logan Utah's #1 Rated Plumber | O.R.E. Plumbing",
    description: "Professional plumbing services in Logan, Utah. Emergency repairs, drain cleaning, water heater installation & more. Licensed & insured.",
    type: "website",
    url: "https://oreplumbing.com/logan-utah-plumber",
  },
});

const services = [
  {
    title: "Emergency Plumbing",
    description: "24/7 emergency plumbing services in Logan",
    icon: Clock,
    link: "/contact"
  },
  {
    title: "Drain Cleaning",
    description: "Professional drain cleaning and unclogging",
    icon: Droplets,
    link: "/services/drain-cleaning"
  },
  {
    title: "Water Heater Services",
    description: "Installation, repair and replacement",
    icon: Thermometer,
    link: "/services/water-heater"
  },
  {
    title: "Pipe Repair",
    description: "Pipe leak detection and repair",
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
    description: "Business and commercial plumbing",
    icon: Building,
    link: "/services/commercial"
  }
];

const loganNeighborhoods = [
  "Downtown Logan",
  "Logan River Golf Course Area",
  "Island Area",
  "Bridger Area", 
  "Canyon Road Area",
  "1000 North Area",
  "Adams Area",
  "Hillcrest Area",
  "Wilson Area",
  "Spring Creek Area"
];

const nearbyAreas = [
  "North Logan",
  "Hyde Park", 
  "Smithfield",
  "Providence",
  "River Heights",
  "Millville",
  "Nibley",
  "Cache County"
];

export default function LoganPlumberPage() {
  return (
    <>
      <LocalBusinessSchema 
        address={{
          streetAddress: "",
          addressLocality: "Logan",
          addressRegion: "Utah", 
          postalCode: "84321",
          addressCountry: "US"
        }}
        geo={{
          latitude: 41.7370,
          longitude: -111.8338
        }}
      />
      <ServicePageSchema
        serviceName="Plumbing Services Logan Utah"
        serviceDescription="Professional plumbing services in Logan, Utah including emergency repairs, drain cleaning, water heater services, and pipe repair."
        serviceUrl="https://oreplumbing.com/logan-utah-plumber"
        areaServed="Logan, Utah"
      />

      <div className="min-h-screen pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-background py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 mt-10">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                Logan, Utah
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Logan's Most Trusted Plumber
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Professional plumbing services in Logan, Utah and surrounding Cache County areas. 
                From emergency repairs to routine maintenance, we're your local plumbing experts.
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

        {/* Services Grid */}
        <section className="py-8 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Plumbing Services in Logan, Utah</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We provide comprehensive plumbing services to Logan residents and businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
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

        {/* Why Choose Us for Logan */}
        <section className="py-8 md:py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why Logan Residents Choose O.R.E. Plumbing
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Local Logan Company",
                  description: "We're based in Cache County and know Logan's unique plumbing challenges."
                },
                {
                  title: "Licensed & Insured",
                  description: "Fully licensed Utah plumbers with comprehensive insurance coverage."
                },
                {
                  title: "24/7 Emergency Service",
                  description: "Emergency plumbing services available anytime in Logan and surrounding areas."
                },
                {
                  title: "Upfront Pricing",
                  description: "Transparent pricing with no hidden fees for all Logan plumbing services."
                },
                {
                  title: "Quality Workmanship",
                  description: "Expert craftsmanship backed by warranties and customer satisfaction guarantee."
                },
                {
                  title: "Fast Response",
                  description: "Quick response times for all Logan area service calls and emergencies."
                }
              ].map((reason, index) => (
                <div key={index} className="flex items-start p-4 bg-background rounded-lg shadow-sm">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-8 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Logan Neighborhoods */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-primary" />
                    Logan Neighborhoods We Serve
                  </CardTitle>
                  <CardDescription>
                    Professional plumbing services throughout Logan, Utah
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {loganNeighborhoods.map((area, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">{area}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Nearby Areas */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-primary" />
                    Nearby Areas We Serve
                  </CardTitle>
                  <CardDescription>
                    Serving Logan and surrounding Cache County communities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {nearbyAreas.map((area, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">{area}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Logan Specific Content */}
        <section className="py-8 md:py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Expert Plumbing Services for Logan's Unique Needs
              </h2>
            </div>
            
            <div className="prose max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Logan, Utah's mountain climate and older neighborhoods present unique plumbing challenges. 
                As your local Cache County plumbing experts, we understand these challenges and provide 
                solutions tailored to Logan's specific needs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Winter Plumbing Protection</h3>
                  <p className="text-muted-foreground">
                    Logan's cold winters require special attention to prevent frozen pipes. We provide 
                    winterization services and emergency frozen pipe repair throughout Cache County.
                  </p>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Hard Water Solutions</h3>
                  <p className="text-muted-foreground">
                    Logan's hard water can damage plumbing systems. We install and service water softeners 
                    to protect your pipes and appliances from mineral buildup.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 md:py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Need a Plumber in Logan, Utah?
              </h2>
              <p className="text-muted-foreground mb-8">
                Contact O.R.E. Plumbing today for fast, reliable plumbing services in Logan and 
                throughout Cache County. Licensed, insured, and locally owned.
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
