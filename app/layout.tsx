import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yassino",
  icons: { icon: "/pp1.png" },
  openGraph: {
    title: "Yassino",
    images: ["/pp1.png"],
    description:"Explore my projects, skills, and experience.", // Ensure this image is in the public folder
    keywords:"yassine,yassino,louati,yassine louati,yessine,loueti,Data, Science,Web,Dev,Portfolio,AI,UML, diagram, generator, class diagram, sequence diagram, use case diagram, software design, modeling",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#0a192f] text-[#8892b0] min-h-screen flex flex-col`}>
        <Providers>
          <Navbar />
          <main className="flex-grow">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
