import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Mail, 
  Phone, 
  Calendar,
  Shield,
  AlertTriangle,
  UserCheck,
  CreditCard,
  Wrench,
  Home,
  Scale
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | O.R.E. Plumbing - Northern Utah",
  description: "Terms of service for O.R.E. Plumbing. Learn about our service terms, warranty policies, and customer responsibilities.",
  keywords: "terms of service, plumbing terms, warranty, O.R.E. Plumbing, Northern Utah",
};

const lastUpdated = "July 19, 2025";

const serviceAreas = [
  {
    icon: Home,
    title: "Service Coverage",
    description: "We provide plumbing services throughout Northern Utah including Logan, Cache Valley, and surrounding areas."
  },
  {
    icon: Calendar,
    title: "Scheduling Terms",
    description: "Appointments are scheduled during business hours with emergency service available 24/7."
  },
  {
    icon: CreditCard,
    title: "Payment Terms",
    description: "Payment is due upon completion of work unless other arrangements have been made in advance."
  }
];

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <FileText className="w-4 h-4 mr-2" />
              Terms of Service
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of <span className="text-primary">Service</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              These terms govern your use of O.R.E. Plumbing services. Please read them carefully 
              before scheduling any plumbing work with us.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-8 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Terms Overview</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Key aspects of our service terms and customer responsibilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <area.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Details */}
      <section className="py-8 md:py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <UserCheck className="w-6 h-6 text-primary" />
                  Acceptance of Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="mb-4">
                  By scheduling plumbing services with O.R.E. Plumbing, you agree to be bound by these terms of service. 
                  These terms constitute a legally binding agreement between you and O.R.E. Plumbing.
                </p>
                <p>
                  If you do not agree with any part of these terms, please do not use our services. 
                  We reserve the right to refuse service to anyone who does not accept these terms.
                </p>
              </CardContent>
            </Card>

            {/* Services Provided */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Wrench className="w-6 h-6 text-primary" />
                  Services Provided
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="mb-4">O.R.E. Plumbing provides the following services:</p>
                <ul className="space-y-2 mb-4">
                  <li>• Emergency plumbing repairs and service calls</li>
                  <li>• Residential and commercial plumbing installation</li>
                  <li>• Drain cleaning and sewer line services</li>
                  <li>• Water heater installation, repair, and maintenance</li>
                  <li>• Bathroom and kitchen plumbing remodeling</li>
                  <li>• Water softener installation and service</li>
                  <li>• Pipe repair, replacement, and installation</li>
                  <li>• Plumbing inspections and consultations</li>
                </ul>
                <p>
                  All services are performed by licensed plumbing professionals in accordance with local building codes and regulations.
                </p>
              </CardContent>
            </Card>

            {/* Scheduling and Appointments */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-primary" />
                  Scheduling and Appointments
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Regular Service Hours:</h4>
                    <ul className="space-y-1">
                      <li>• Monday - Friday: 7:00 AM - 6:00 PM</li>
                      <li>• Saturday: 8:00 AM - 4:00 PM</li>
                      <li>• Sunday: Emergency calls only</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Emergency Service:</h4>
                    <ul className="space-y-1">
                      <li>• Available 24/7 for plumbing emergencies</li>
                      <li>• Emergency rates apply outside regular business hours</li>
                      <li>• Response time: 30 minutes to 2 hours depending on location and conditions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Appointment Policies:</h4>
                    <ul className="space-y-1">
                      <li>• 24-hour notice required for appointment cancellations</li>
                      <li>• Service call fees may apply for no-shows or same-day cancellations</li>
                      <li>• We will provide estimated arrival times and call ahead when possible</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing and Payment */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <CreditCard className="w-6 h-6 text-primary" />
                  Pricing and Payment Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Pricing:</h4>
                    <ul className="space-y-1">
                      <li>• All prices are quoted upfront before work begins</li>
                      <li>• Pricing may vary based on complexity, materials, and time requirements</li>
                      <li>• Emergency service rates apply outside regular business hours</li>
                      <li>• Written estimates provided for major projects over $500</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Payment:</h4>
                    <ul className="space-y-1">
                      <li>• Payment is due upon completion of work unless other arrangements are made</li>
                      <li>• We accept cash, check, and major credit cards</li>
                      <li>• Financing options available for qualifying projects</li>
                      <li>• A service call fee may be charged for diagnostic visits</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Late Payment:</h4>
                    <ul className="space-y-1">
                      <li>• Past due accounts may be subject to late fees and interest charges</li>
                      <li>• Collection costs may be added to delinquent accounts</li>
                      <li>• Future service may be refused for accounts in arrears</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Warranty and Guarantees */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  Warranty and Guarantees
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Labor Warranty:</h4>
                    <ul className="space-y-1">
                      <li>• 1-year warranty on all labor and workmanship</li>
                      <li>• 30-day warranty on drain cleaning services</li>
                      <li>• Warranty covers defects in workmanship, not normal wear and tear</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Parts and Materials:</h4>
                    <ul className="space-y-1">
                      <li>• Manufacturer warranties apply to all parts and fixtures</li>
                      <li>• We will assist with warranty claims and replacements</li>
                      <li>• Warranty periods vary by manufacturer and product type</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Warranty Limitations:</h4>
                    <ul className="space-y-1">
                      <li>• Warranty void if work is altered by unauthorized persons</li>
                      <li>• Does not cover damage from misuse, neglect, or normal wear</li>
                      <li>• Customer must provide reasonable access for warranty work</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Customer Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Home className="w-6 h-6 text-primary" />
                  Customer Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="mb-4">To ensure safe and efficient service, customers are responsible for:</p>
                <ul className="space-y-2 mb-4">
                  <li>• Providing safe and reasonable access to work areas</li>
                  <li>• Clearing work areas of personal belongings and obstacles</li>
                  <li>• Ensuring adequate lighting and ventilation in work areas</li>
                  <li>• Disclosing known hazards or unsafe conditions</li>
                  <li>• Obtaining necessary permits when required by local authorities</li>
                  <li>• Following maintenance recommendations and instructions</li>
                  <li>• Promptly reporting any issues with completed work</li>
                </ul>
                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                  <p className="text-sm font-medium text-orange-800 dark:text-orange-200 mb-2">
                    <AlertTriangle className="w-4 h-4 inline mr-1" />
                    Important Safety Notice
                  </p>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    Customers must inform us of any hazardous materials (asbestos, lead paint, etc.) 
                    or unsafe conditions before work begins. Additional fees may apply for hazardous material handling.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Liability and Insurance */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Scale className="w-6 h-6 text-primary" />
                  Liability and Insurance
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Our Insurance:</h4>
                    <ul className="space-y-1">
                      <li>• O.R.E. Plumbing is fully licensed and insured</li>
                      <li>• General liability insurance covers property damage during service</li>
                      <li>• Workers' compensation insurance covers our employees</li>
                      <li>• Insurance certificates available upon request</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Limitation of Liability:</h4>
                    <ul className="space-y-1">
                      <li>• Liability limited to the cost of services provided</li>
                      <li>• Not responsible for pre-existing conditions or code violations</li>
                      <li>• Not liable for consequential or indirect damages</li>
                      <li>• Customer's homeowner's insurance may cover certain types of damage</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Claims Process:</h4>
                    <ul className="space-y-1">
                      <li>• Report any damage or issues immediately</li>
                      <li>• Document damage with photos when possible</li>
                      <li>• Allow reasonable time for investigation and resolution</li>
                      <li>• Good faith effort to resolve disputes before legal action</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Termination and Disputes */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Termination and Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Service Termination:</h4>
                    <ul className="space-y-1">
                      <li>• Either party may terminate service with reasonable notice</li>
                      <li>• We reserve the right to refuse service for safety or legal reasons</li>
                      <li>• Payment due for all completed work upon termination</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Dispute Resolution:</h4>
                    <ul className="space-y-1">
                      <li>• Good faith effort to resolve disputes through direct communication</li>
                      <li>• Mediation available through local business organizations</li>
                      <li>• Utah state laws govern these terms and any disputes</li>
                      <li>• Legal proceedings in Cache County, Utah courts</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Changes to Terms of Service</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="mb-4">
                  O.R.E. Plumbing reserves the right to modify these terms of service at any time. 
                  Changes will be effective immediately upon posting on our website or notification to customers.
                </p>
                <p className="mb-4">
                  Continued use of our services after changes constitute acceptance of the new terms. 
                  We recommend reviewing these terms periodically for updates.
                </p>
                <p>
                  For questions about these terms or any changes, please contact us using the information below.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-8 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Questions About Our Terms?</CardTitle>
              <CardDescription className="text-center">
                Contact us if you have questions about our terms of service or need clarification.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <Phone className="w-8 h-8 text-primary mx-auto" />
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">(435) 890-3316</p>
                </div>
                <div className="space-y-2">
                  <Mail className="w-8 h-8 text-primary mx-auto" />
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">info@oreplumbing.com</p>
                </div>
                <div className="space-y-2">
                  <FileText className="w-8 h-8 text-primary mx-auto" />
                  <h3 className="font-semibold">Mail</h3>
                  <p className="text-muted-foreground text-sm">
                    O.R.E. Plumbing<br/>
                    Logan, UT
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Schedule Plumbing Service?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Now that you understand our terms, let's get your plumbing issues resolved quickly and professionally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100" asChild>
              <a href="tel:4358903316">
                <Phone className="w-4 h-4 mr-2" />
                Call (435) 890-3316
              </a>
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white hover:text-primary">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Service
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
