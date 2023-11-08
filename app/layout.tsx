import Script from "next/script";
import { Noto_Sans_KR } from "next/font/google";
import { ConfigProvider } from "antd";
import StyledComponentsRegistry from "../lib/AntdRegistry";

const notoSans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: "400",
});

declare global {
  interface Window {
    Kakao: any;
  }
}

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
      <head>
        <Script src="https://developers.kakao.com/sdk/js/kakao.js"></Script>
      </head>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#5cdbd3",
          },
        }}
      >
        <body className={notoSans.className}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </ConfigProvider>
    </html>
  );
}
