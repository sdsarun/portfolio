import type { Metadata } from "next";
import "./globals.css";
import { notoSans, notoSansMono } from "@/core/configs/font";

export const metadata: Metadata = {
  title: {
    // add a prefix or a suffix to titles defined in 'child' route segments
    template: `Sarun | %s`,

    // fallback title to 'child' route segments that don't define a title
    // default is required when you add a title.template
    default: "Sarun",

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSans.variable} ${notoSansMono.variable}`}
    >
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}