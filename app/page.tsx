import HeroSection from "@/app/hero"
import Listing from "@/app/listing"
import Footer from "@/app/footer"

export default async function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <HeroSection />
      <Listing />
      <Footer />
    </section>
  )
}
