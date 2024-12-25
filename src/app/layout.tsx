import "./globals.css";
import {ClerkProvider} from "@clerk/nextjs";
import Header from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <ClerkProvider>
          <Header />
          {children}
      </ClerkProvider>
      </body>
    </html>
  );
}
