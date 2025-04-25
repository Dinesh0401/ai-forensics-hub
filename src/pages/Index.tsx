
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="container pt-32 pb-16">
        <section className="flex flex-col items-center text-center space-y-8">
          <h1 className="text-5xl font-bold tracking-tight">
            Combat <span className="text-primary">Deepfake Media</span> With
            <br />
            Trustworthy Analysis
          </h1>
          <p className="text-lg text-muted-foreground max-w-[750px]">
            FakeniX helps detect, report, and track manipulated content to create a safer
            online environment.
          </p>
          <div className="flex gap-4">
            <Link to="/report">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                Try Detection Demo
              </Button>
            </Link>
            <Link to="/report">
              <Button size="lg" variant="outline">
                Report Deepfake
              </Button>
            </Link>
          </div>
        </section>

        <section className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Core Innovations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Multi-Modal Trust Verification",
                description:
                  "Proprietary system combining digital fingerprinting, blockchain-based provenance tracking, temporal consistency analysis, and our patent-pending Trust Score Generator.",
              },
              {
                title: "Neural Watermarking Defense",
                description:
                  "Our invisible neural watermarking technology embeds imperceptible signatures that survive compression and manipulation, with specialized extraction algorithms and countermeasure generation.",
              },
              {
                title: "Behavioral Anomaly Detection",
                description:
                  "Advanced analysis of micro-expressions, physiological consistency verification, and environmental physics validation to detect unnatural elements.",
              },
              {
                title: "Adaptive Deepfake Resilience",
                description:
                  "Self-improving system with adversarial training networks, distributed detection consensus, and temporal detection memory to build immunity.",
              },
            ].map((innovation, i) => (
              <div
                key={i}
                className="p-6 rounded-lg border border-border bg-card hover:bg-card/50 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-3">{innovation.title}</h3>
                <p className="text-muted-foreground">{innovation.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
