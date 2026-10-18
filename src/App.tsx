import { ToastProvider } from "./components/Toast";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { Stats } from "./sections/Stats";
import { Expertise } from "./sections/Expertise";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Strengths } from "./sections/Strengths";
import { Contact } from "./sections/Contact";

/**
 * Home page. When more pages are added, move this tree into src/pages/Home.tsx
 * and put a router around it (see README, "Adding pages").
 */
export default function App() {
  return (
    <ToastProvider>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Stats />
        <Expertise />
        <Projects />
        <Experience />
        <Strengths />
        <Contact />
      </main>
      <Footer />
    </ToastProvider>
  );
}
