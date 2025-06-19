import Hero from "@/components/Hero";
import BestSelling from "@/components/BestSelling";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <div className="bg-blue-500 text-white p-4 rounded-md mb-4">
        Tailwind is working!
      </div>
      
      <Hero />
      <BestSelling />
      <FAQ />
      <Footer />
    </main>
  );
}
