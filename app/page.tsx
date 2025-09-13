import Footer from "components/Footer";
import NavbarHome from "components/NavbarHome";
import Image from "next/image";
import SupergrafisKuning from "public/images/supergrafis_kuning.svg";
import SupergrafisUngu from "public/images/supergrafis_ungu.svg";
import { FaBezierCurve, FaCamera } from "react-icons/fa6";
import { MdOutlineSmartphone } from "react-icons/md";

export default function Home() {
  const services = [
    {
      title: "Photo & Videography",
      icon: <FaCamera />,
      description: [
        {
          name: "Product Photography",
          items: ["Catalog", "Still Life", "Lookbook"],
        },
      ],
    },
    {
      title: "Branding & Graphic Design",
      icon: <FaBezierCurve />,
      description: [
        { name: "Branding", items: [] },
        { name: "Social Media Design", items: [] },
        { name: "Graphic Design", items: [] },
      ],
    },
    {
      title: "Social Media Management",
      icon: <MdOutlineSmartphone />,
      description: [
        {
          name: "Videography",
          items: [
            "Company Profile",
            "Ads Video",
            "Campaign Video",
            "Explainer",
          ],
        },
        { name: "Motion Graphics", items: [] },
      ],
    },
  ];

  return (
    <>
      <main className="flex min-h-screen flex-col gap-8">
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
        <section className="aspect-video w-full bg-gray-400">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/TCig-Oql7ts?si=KHiNP9LH-Jf6ZkUv"
            title="Company Profile Bero Setudio"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </section>
        {/* Video Showreels Porto End */}

        {/* Services */}
        <section id="services">
          <div className="container">
            <h2 className="heading__home">
              Our <span>Services</span>
            </h2>
            <div className="text-secondary-main flex flex-col gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 gap-2 md:grid-cols-5 md:items-center md:justify-center md:gap-6"
                >
                  <div className="flex md:col-span-2 md:justify-end">
                    <p className="text-xl font-black md:max-w-[70%] md:text-right">
                      {service.title}
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-primary-main border-primary-main hidden aspect-square w-fit rounded-full border-[0.75rem] p-6 text-5xl md:block lg:border-[1rem] lg:text-7xl">
                      {service.icon}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 md:col-span-2">
                    {service.description.map((desc, descIndex) => (
                      <div key={descIndex}>
                        <h6 className="font-bold">{desc.name}</h6>
                        <ul className="list-disc pl-6">
                          {desc.items.length > 0 &&
                            desc.items.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Services End */}

        {/* Teams */}
        <section id="teams">
          <div className="container">
            <h2 className="heading__home">
              Our <span>Teams</span>
            </h2>
          </div>
        </section>
        {/* Teams End */}

        {/* Works */}
        <section id="works">
          <div className="container">
            <h2 className="heading__home">
              Our <span>Works</span>
            </h2>
          </div>
        </section>
        {/* Works End */}
      </main>
      {/* Footer */}
      <Footer />
      {/* Footer End */}
    </>
  );
}
