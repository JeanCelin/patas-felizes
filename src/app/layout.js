import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.patasfelizes.org"),
  title: {
    template: "%s | ONG Patas Felizes",
    default: "Patas Felizes",
    keywords: [
      "adoção",
      "ONG",
      "animais",
      "cães",
      "cachorros",
      "gatos",
      "doação",
      "voluntário",
    ],
  },
  description:
    "A Patas Felizes é uma ONG de resgate e adoção de animais localizada em Castelo, Espírito Santo. Encontre um novo amigo, nossos cachorros e gatos  então à espera de um lar, faça uma doação ou torne-se voluntário e mude uma vida.",

  openGraph: {
    title: "Patas Felizes | Adote um amigo",
    description:
      "Adote, ajude ou apadrinhe um animal resgatado pela ONG Patas Felizes.",
    url: "https://www.patasfelizes.org",
    siteName: "Patas Felizes",
    images: [
      {
        url: "patas-felizes-adocao.png",
        width: 1200,
        height: 630,
        alt: "Cães e gatos disponíveis para adoção na ONG Patas Felizes",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patas Felizes | Adote um amigo",
    description:
      "Adote, ajude ou apadrinhe um animal resgatado pela ONG Patas Felizes.",
    images: ["patas-felizes-adocao.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable}`}>
        <Navbar />
        <div style={{ paddingTop: "65px" }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
