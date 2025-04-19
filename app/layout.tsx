import "./globals.css";

// components
import { Providers } from "@/core/components/providers/providers";
import { Header } from "@/core/components/layout/header";
import { Navbar } from "@/core/components/layout/navbar";
import { FadeIn } from "@/core/components/wrapper/fade-in";
import { FooterNavigate } from "@/core/components/layout/footer-navigate";

// configs
import { notoSans, notoSansMono } from "@/core/configs/font";

// types
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    // add a prefix or a suffix to titles defined in 'child' route segments
    template: `sdsarun | %s`,

    // fallback title to 'child' route segments that don't define a title
    // default is required when you add a title.template
    default: "sdsarun",

    // can be used to provide a title that ignores title.template
    // absolute: "..."
  },
  description: "Portfolio of Sarun Daunghirun - showcasing modern web design and development with a focus on responsive UI, interactive experiences, and clean, scalable code using cutting-edge technologies.",
  keywords: ['Web Developer', 'Frontend Developer', 'Backend Developer', 'UI/UX', 'Portfolio', 'Next.js', 'Tailwind CSS', 'JavaScript', 'React', 'Web Design', 'NestJS'],
  authors: [{ name: 'Sarun Daunghirun' }],
  creator: 'Sarun Daunghirun',
  generator: 'Next.js',
  applicationName: 'Sarun Portfolio',
};

export const viewport: Viewport = {
  maximumScale: 1
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSans.variable} ${notoSansMono.variable}`}
      suppressHydrationWarning
    >
      <body
        className={`antialiased sm:subpixel-antialiased`}
      >
        <Providers>
          <Header className="mt-20">
            <FadeIn>
              <Navbar />
            </FadeIn>
          </Header>
          {children}
          <FadeIn>
            <FooterNavigate />
          </FadeIn>
        </Providers>
      </body>
    </html>
  );
}