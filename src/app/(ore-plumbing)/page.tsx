import { Fragment } from "react";
import Hero from "./_components/hero";
import About from "./_components/about";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <About />
    </Fragment>
  );
}
