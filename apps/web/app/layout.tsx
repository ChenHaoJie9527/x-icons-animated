import type { Metadata } from "next";
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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className="h-full" lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
