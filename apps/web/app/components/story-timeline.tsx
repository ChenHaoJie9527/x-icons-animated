"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { PAGE_ANIMATIONS } from "@/lib/animation-timeline";

interface StoryTimelineProps {
	iconsCount?: number;
}

export function StoryTimeline({ iconsCount = 316 }: StoryTimelineProps) {
	return (
		<div className="w-full max-w-4xl mx-auto px-6 py-16 md:py-16">
			<div className="text-center space-y-6">
				<motion.h1
					className="text-4xl md:text-5xl font-bold text-foreground leading-tight"
					{...PAGE_ANIMATIONS.heroTitle}
				>
					Beautiful animated SVG icons,
					<br />
					powered by Motion.
				</motion.h1>

				<motion.div
					className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-lg"
					{...PAGE_ANIMATIONS.heroStats}
				>
					<span className="text-foreground font-semibold">
						{iconsCount} icons
					</span>
					<span className="text-muted">MIT license</span>
					<span className="text-muted">React & Vue libraries</span>
				</motion.div>

				<motion.p
					className="text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed"
					{...PAGE_ANIMATIONS.heroDescription}
				>
					Inspired by{" "}
					<Link
						href="https://heroicons.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-primary hover:underline"
					>
						Heroicons
					</Link>{" "}
					open-source icon design and{" "}
					<Link
						href="https://www.xicons.org"
						target="_blank"
						rel="noopener noreferrer"
						className="text-primary hover:underline"
					>
						xicons
					</Link>{" "}
					multi-framework support, powered by Motion to bring every icon to
					life.
					<br />
					Works seamlessly with{" "}
					<Link
						href="https://react.dev"
						target="_blank"
						rel="noopener noreferrer"
						className="text-[#05abf8] hover:underline"
					>
						React
					</Link>
					,
					<Link
						href="https://vuejs.org"
						target="_blank"
						rel="noopener noreferrer"
						className="text-[#42b883] hover:underline"
					>
						Vue
					</Link>
					, and other mainstream frameworks, ready to use out of the box.
				</motion.p>

				<motion.div
					className="pt-8 text-sm text-subtle"
					{...PAGE_ANIMATIONS.heroFooter}
				>
					<p>
						MIT License · Use freely, share and contribute · Inspired by{" "}
						<Link
							href="https://heroicons.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted hover:text-primary transition-colors"
						>
							Heroicons
						</Link>{" "}
						&{" "}
						<Link
							href="https://www.xicons.org"
							target="_blank"
							rel="noopener noreferrer"
							className="text-muted hover:text-primary transition-colors"
						>
							xicons
						</Link>
					</p>
				</motion.div>
			</div>
		</div>
	);
}
