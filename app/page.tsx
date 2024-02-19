import Footer from "@/components/Footer";
import NavbarHome from "@/components/NavbarHome";
import SupergrafisKuning from "@/public/images/supergrafis_kuning.svg";
import SupergrafisUngu from "@/public/images/supergrafis_ungu.svg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        {/* Home */}
        <section
          id="home"
          className="jumbotron relative min-h-screen overflow-hidden text-white"
        >
          <div className="relative h-screen w-full">
            <Image
              src={SupergrafisUngu}
              alt="Supergrafis Ungu"
              fill
              priority
              className="scale-150"
            />
            <Image
              src={SupergrafisKuning}
              alt="Supergrafis Kuning"
              className="absolute -bottom-44 -left-[20%]"
            />
          </div>
          <NavbarHome />
          <div className="absolute right-8 top-1/2 -translate-y-1/2 lg:right-10">
            <h1 className="text-nowrap text-right text-7xl font-black uppercase">
              For all your
              <br />
              <span className="italic">cretive needs</span>
            </h1>
          </div>
        </section>
        {/* Home End */}

        {/* About Us */}
        <section className="flex items-center justify-center py-4">
          <p className="max-w-3xl text-center text-[#616161]">
            We are creative house based on Bandung, filled with young and unique
            individuals providing a complete set of creative services for your
            brands
          </p>
        </section>
        {/* About Us End */}

        {/* Video Showreels Porto */}
        <section className="aspect-video w-full bg-gray-400"></section>
        {/* Video Showreels Porto End */}

        {/* Services */}
        <section></section>
        {/* Services End */}

        {/* Teams */}
        <section></section>
        {/* Teams End */}

        {/* Works */}
        <section></section>
        {/* Works End */}
      </main>
      {/* Footer */}
      <Footer />
      {/* Footer End */}
    </>
  );
}
