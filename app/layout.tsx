import { Providers } from "./providers";
import { RainbowKitProviders } from "./providers/rainbow-provider";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RainbowKitProviders>
          <Providers>{children}</Providers>
        </RainbowKitProviders>
      </body>
    </html>
  );
}
