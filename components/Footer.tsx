import Image from "next/image";
import Link from "next/link";
import { MdCall, MdMail } from "react-icons/md";
import type { itemsInterface } from "utils/Interface";

import Logo from "public/images/logo_footer.svg";
import SupergrafisUngu from "public/images/supergrafis_ungu_footer.svg";

const items: itemsInterface[] = [
  {
    path: "#",
    name: "about us",
  },
  {
    path: "#",
    name: "contact us",
  },
  {
    path: "#",
    name: "our works",
  },
  {
    path: "#",
    name: "our clients",
  },

  {
    path: "#",
    name: "journal",
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-linear-to-bl relative from-[#7900E2] to-[#500EA5] py-8 text-white"
    >
      <Image src={SupergrafisUngu} alt="Supergrafis Footer" fill />
      <div className="container relative flex flex-col gap-6">
        <div className="flex flex-col items-center justify-start gap-6 md:flex-row md:items-end md:justify-between">
          <Image src={Logo} alt="Logo Footer" height={80} />
          <span className="text-xl font-medium">
            PT. Beroperasi Sepenuh Hati
          </span>
        </div>
        <hr />
        <div className="flex flex-col flex-wrap justify-start gap-8 md:flex-row md:justify-between">
          <div className="flex grow flex-col gap-3">
            <h3 className="text-xl font-extrabold">Bero Setudio</h3>
            <hr />
            <div className="flex gap-4">
              <div className="max-w-48">
                <p className="font-semibold">Office</p>
                <span className="font-light">
                  Jl. Progo no. 3 Citarum, Bandung Wetan, Kota Bandung.
                </span>
              </div>
              <div className="max-w-48">
                <p className="font-semibold">Studio</p>
                <span className="font-light">
                  Jl. Sidomukti no.99G, Cibeunying Kaler Kota Bandung.
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-extrabold">Get In Touch</h3>
            <hr />
            <div className="flex flex-col gap-2">
              <Link
                href="mailto:hello@berosetudio.com"
                className="flex items-center justify-start gap-2"
                target="_blank"
              >
                <div className="flex items-center justify-center rounded-full bg-white p-1">
                  <MdMail className="text-primary-main" />
                </div>
                hello@berosetudio.com
              </Link>
              <Link
                href="https://wa.me/085600963500"
                className="flex items-center justify-start gap-2"
                target="_blank"
              >
                <div className="flex items-center justify-center rounded-full bg-white p-1">
                  <MdCall className="text-primary-main" />
                </div>
                0856 0096 3500
              </Link>
            </div>
          </div>
          <div className="flex min-w-56 flex-col gap-3">
            <h3 className="text-xl font-extrabold">Company</h3>
            <hr />
            <div className="flex flex-col gap-2 capitalize">
              {items.map((item: itemsInterface, index: number) => {
                return (
                  <Link href={item.path} key={index}>
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
