import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shreyaj Padigala | Data Science Student & Software Engineer",
  description: "Portfolio of Shreyaj Padigala - Data Science student at UT Dallas, passionate about machine learning, software engineering, and building innovative AI solutions.",
  keywords: ["Shreyaj Padigala", "Data Science", "Machine Learning", "Software Engineer", "UT Dallas", "Portfolio"],
  authors: [{ name: "Shreyaj Padigala" }],
  openGraph: {
    title: "Shreyaj Padigala | Portfolio",
    description: "Data Science Student & Software Engineer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
