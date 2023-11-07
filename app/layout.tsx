import StyledComponentsRegistry from "../lib/AntdRegistry";
import { Inter, Noto_Sans_KR } from "next/font/google";
import { ConfigProvider } from "antd";

const inter = Inter({ subsets: ["latin"] });
const notoSerif = Noto_Sans_KR({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "찐영상 - 유튜브 영상 분석",
  description: "가장 가치있는 영상을 찾아드립니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kor">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#5cdbd3",
          },
        }}
      >
        <body className={notoSerif.className}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </ConfigProvider>
    </html>
  );
}
