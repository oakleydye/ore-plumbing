import { Fragment } from "react";
import { Metadata } from "next";
import Hero from "./_components/hero";
import About from "./_components/about";
import ContactForm from "../_components/contact-form";
import { generateMetadata, getLocalSEOKeywords } from "@/components/seo/metadata";
import { FAQPageSchema } from "@/components/seo/structured-data";

export const metadata: Metadata = generateMetadata({
  title: "Cache County Plumber | O.R.E. Plumbing | Emergency Plumbing Services Logan, UT",
  description: "Expert plumbers serving Cache County, Utah. 24/7 emergency service in Logan, North Logan, Hyde Park, Smithfield & surrounding areas. Licensed, insured & locally owned. Call (435) 890-3316 for fast, reliable plumbing services.",
  keywords: getLocalSEOKeywords(),
  canonical: "https://oreplumbing.com",
  openGraph: {
    title: "Cache County's #1 Rated Plumber | O.R.E. Plumbing",
    description: "Professional plumbing services in Cache County, Utah. Emergency repairs, drain cleaning, water heater installation & more. Licensed & insured.",
    type: "website",
    image: "/logo.webp",
    url: "https://oreplumbing.com",
  },
});

const faqs = [
  {
    question: "Do you provide 24/7 emergency plumbing services in Cache County?",
    answer: "Yes, O.R.E. Plumbing provides emergency plumbing services throughout Cache County, Utah including Logan, North Logan, Hyde Park, and Smithfield. Call (435) 890-3316 for immediate assistance."
  },
  {
    question: "What areas in Cache County do you serve?",
    answer: "We serve all of Cache County including Logan, North Logan, Hyde Park, Smithfield, Providence, Millville, River Heights, Nibley, Wellsville, and surrounding communities in Northern Utah."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, O.R.E. Plumbing is fully licensed and insured to provide plumbing services in Utah. We maintain all required certifications and insurance coverage for your protection."
  },
  {
    question: "Do you offer free estimates?",
    answer: "Yes, we provide free estimates for most plumbing services in Cache County. Contact us at (435) 890-3316 or through our website to schedule your free estimate."
  }
];

export default function Home() {
  return (
    <Fragment>
      <FAQPageSchema faqs={faqs} />
      <Hero />
      <About />
      <ContactForm />
    </Fragment>
  );
}
