import { Fragment } from "react";
import Hero from "./_components/hero";
import About from "./_components/about";
import ContactForm from "../_components/contact-form";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <About />
      <ContactForm />
    </Fragment>
  );
}
