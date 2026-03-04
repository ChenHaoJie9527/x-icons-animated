import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	display: "swap",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	display: "swap",
});

export const metadata: Metadata = {
	title: "x-icons — Animated Icon Library",
	description:
		"An open-source collection of smooth animated icons. Free to use, MIT licensed.",
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	userScalable: false,
	maximumScale: 1,
	minimumScale: 1,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className="h-full" lang="en" suppressHydrationWarning>
			<body
				className={`root ${geistSans.variable} ${geistMono.variable} h-full antialiased bg-background`}
			>
				{children}
			</body>
		</html>
	);
}
