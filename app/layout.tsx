import { Providers } from "./providers";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* <RainbowKitProviders>
          <Providers>{children}</Providers>
        </RainbowKitProviders> */}
        {children}
      </body>
    </html>
  );
}
