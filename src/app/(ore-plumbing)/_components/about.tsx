import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Fragment } from "react";

export default function About() {
  return (
    <Fragment>
      <section className="max-w-2xl mx-auto my-12 px-4">
        <Card>
          <CardHeader>
            <CardTitle>About O.R.E. Plumbing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">
              <strong>Our Mission:</strong>
            </p>
            <p className="text-muted-foreground">
              At O.R.E. Plumbing our mission is to provide high-quality plumbing
              services with a steadfast commitment to excellence, customer
              satisfaction, and dependable availability. We prioritize precision
              workmanship and uphold the highest industry standards to ensure
              lasting results for every client. Our business is built on strong,
              trust-based relationships with both residential and commercial
              customers, with a goal to continue to grow bigger. We aim to
              establish ourselves as a trusted and enduring presence in the
              plumbing industry.
            </p>
          </CardContent>
        </Card>
      </section>
    </Fragment>
  );
}
