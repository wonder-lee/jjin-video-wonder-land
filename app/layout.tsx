import StyledComponentsRegistry from "../lib/AntdRegistry";
// import './globals.css'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "찐영상",
  description: "유튜브 분석 툴 | 유튜브 영상 분석",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
