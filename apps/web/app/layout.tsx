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

/**
 * 设置 viewport 配置
 * 让页面在移动端和桌面端都能正常显示
 */
export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	userScalable: false,
	maximumScale: 1,
	minimumScale: 1
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		/**
		 * 禁用 hydration 警告
		 */
		<html className="h-full" lang="en" suppressHydrationWarning>
			<body
				className={`root ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
