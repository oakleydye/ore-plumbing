import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Mail, 
  Phone, 
  Calendar,
  Eye,
  Lock,
  UserCheck,
  FileText,
  AlertCircle
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | O.R.E. Plumbing - Northern Utah",
  description: "Privacy policy for O.R.E. Plumbing. Learn how we collect, use, and protect your personal information when you use our plumbing services.",
  keywords: "privacy policy, data protection, O.R.E. Plumbing, Northern Utah",
};

const lastUpdated = "July 19, 2025";

const informationTypes = [
  {
    icon: UserCheck,
    title: "Contact Information",
    description: "Name, phone number, email address, and service address",
    purpose: "To schedule appointments and communicate about your plumbing services"
  },
  {
    icon: FileText,
    title: "Service Information",
    description: "Details about plumbing issues, service history, and preferences",
    purpose: "To provide better service and maintain service records"
  },
  {
    icon: Calendar,
    title: "Appointment Data",
    description: "Scheduling information and service appointment history",
    purpose: "To manage appointments and follow up on completed work"
  }
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Shield className="w-4 h-4 mr-2" />
              Privacy Policy
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              At O.R.E. Plumbing, we are committed to protecting your privacy and personal information. 
              This policy explains how we collect, use, and safeguard your data.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Information We Collect */}
      <section className="py-8 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Information We Collect</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We collect information to provide you with the best possible plumbing services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {informationTypes.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                  <CardDescription>{info.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    <strong>Purpose:</strong> {info.purpose}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Details */}
      <section className="py-8 md:py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {/* How We Use Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Eye className="w-6 h-6 text-primary" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="space-y-2 mb-4">
                  <li>• Schedule and manage plumbing service appointments</li>
                  <li>• Communicate with you about your service needs</li>
                  <li>• Provide estimates and invoices for plumbing work</li>
                  <li>• Follow up on completed services and warranty issues</li>
                  <li>• Send appointment reminders and service notifications</li>
                  <li>• Improve our services based on your feedback</li>
                  <li>• Comply with legal and regulatory requirements</li>
                </ul>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <UserCheck className="w-6 h-6 text-primary" />
                  Information Sharing and Disclosure
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="mb-4">We do not sell, rent, or trade your personal information. We may share your information only in the following circumstances:</p>
                <ul className="space-y-2 mb-4">
                  <li>• <strong>Service Providers:</strong> With trusted third parties who help us operate our business (payment processors, scheduling software, etc.)</li>
                  <li>• <strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                  <li>• <strong>Emergency Situations:</strong> To protect the safety of our customers, employees, or the public</li>
                  <li>• <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of business assets</li>
                </ul>
                <p>All third parties who receive your information are required to protect it and use it only for the specified purposes.</p>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Lock className="w-6 h-6 text-primary" />
                  Data Security
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="mb-4">We implement appropriate security measures to protect your personal information:</p>
                <ul className="space-y-2 mb-4">
                  <li>• Secure data transmission using encryption technology</li>
                  <li>• Limited access to personal information on a need-to-know basis</li>
                  <li>• Regular security assessments and updates</li>
                  <li>• Secure storage of physical and digital records</li>
                  <li>• Employee training on data privacy and security</li>
                </ul>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <p className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">
                    <AlertCircle className="w-4 h-4 inline mr-1" />
                    Important Note
                  </p>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    While we use industry-standard security measures, no method of transmission over the internet is 100% secure. 
                    We cannot guarantee absolute security of your information.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  Your Privacy Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="mb-4">You have the following rights regarding your personal information:</p>
                <ul className="space-y-2 mb-4">
                  <li>• <strong>Access:</strong> Request a copy of the personal information we have about you</li>
                  <li>• <strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li>• <strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                  <li>• <strong>Portability:</strong> Request transfer of your information to another service provider</li>
                  <li>• <strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                  <li>• <strong>Complaints:</strong> File a complaint about our privacy practices</li>
                </ul>
                <p>To exercise any of these rights, please contact us using the information provided below.</p>
              </CardContent>
            </Card>

            {/* Cookies and Tracking */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Cookies and Website Tracking</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="mb-4">Our website may use cookies and similar tracking technologies to:</p>
                <ul className="space-y-2 mb-4">
                  <li>• Remember your preferences and settings</li>
                  <li>• Analyze website traffic and usage patterns</li>
                  <li>• Improve website functionality and user experience</li>
                  <li>• Provide relevant advertising (if applicable)</li>
                </ul>
                <p>You can control cookie settings through your browser preferences. However, disabling cookies may affect website functionality.</p>
              </CardContent>
            </Card>

            {/* Changes to Policy */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="mb-4">
                  We may update this privacy policy from time to time to reflect changes in our practices, technology, 
                  legal requirements, or other factors. We will notify you of significant changes by:
                </p>
                <ul className="space-y-2 mb-4">
                  <li>• Posting the updated policy on our website</li>
                  <li>• Sending email notifications to customers</li>
                  <li>• Updating the "Last Updated" date at the top of this policy</li>
                </ul>
                <p>Your continued use of our services after policy changes constitutes acceptance of the updated policy.</p>
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
              <CardTitle className="text-2xl text-center">Contact Us About Privacy</CardTitle>
              <CardDescription className="text-center">
                Questions about this privacy policy or our data practices? We're here to help.
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
                  <p className="text-muted-foreground">ore.plumbing@gmail.com</p>
                </div>
                <div className="space-y-2">
                  <FileText className="w-8 h-8 text-primary mx-auto" />
                  <h3 className="font-semibold">Mail</h3>
                  <p className="text-muted-foreground text-sm">
                    O.R.E. Plumbing<br/>
                    Privacy Officer<br/>
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
            Questions About Our Privacy Policy?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We're committed to protecting your privacy. Contact us if you have any questions or concerns.
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
                <Mail className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
