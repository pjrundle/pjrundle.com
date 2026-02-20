import { Hero } from "./sections/Hero/Hero.tsx";
import { Projects } from "./sections/Projects/Projects.tsx";
import { Testimonials } from "./sections/Testionials/Testimonials.tsx";

export const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Testimonials />
    </>
  );
};
