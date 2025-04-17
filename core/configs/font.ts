import { Noto_Sans, Noto_Sans_Mono } from "next/font/google";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

const notoSansMono = Noto_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-noto-sans-mono"
})

export {
  notoSans,
  notoSansMono,
}