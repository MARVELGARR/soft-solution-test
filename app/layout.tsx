import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SideBar from "@/components/wholeComponent/sideBar";
import HeaderComponent from "@/components/ui/header";
import ReduxProvider from "@/providers/redux-provider";
import ReactQueryProvider from "@/providers/reactQueryProider";
import { Toaster } from "@/components/ui/toaster";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});


const inter = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Soft-solution test",
  description: "My soft solution test submition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            
            <SidebarProvider>
              <ReduxProvider>

                <SideBar />
                <main className="w-full h-full">
                  <SidebarTrigger />
                  <div className="w-full">
                    <HeaderComponent />
                    <div className="px-[1.2em]">

                      {children}
                    </div>
                  </div>
                  <Toaster />
                </main>
              </ReduxProvider>
            </SidebarProvider>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
