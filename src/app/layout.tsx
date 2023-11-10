import { GlobalStyle } from "@/lib/styled";
import RecoilRootWrapper from "@/components/RecoilRootWrapper";
import ReactQueryWrapper from "@/components/ReactQueryWrapper";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <>
          <RecoilRootWrapper>
            <ReactQueryWrapper>
              <ThemeProviderWrapper>
                <GlobalStyle />
                {children}
              </ThemeProviderWrapper>
            </ReactQueryWrapper>
          </RecoilRootWrapper>
        </>
      </body>
    </html>
  );
}
