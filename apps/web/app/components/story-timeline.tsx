"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { PAGE_ANIMATIONS } from "@/lib/animation-timeline";

interface StoryTimelineProps {
	searchValue?: string;
	onSearchChange?: (value: string) => void;
}

export function StoryTimeline({
	searchValue,
	onSearchChange,
}: StoryTimelineProps) {
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
					<span className="text-foreground font-semibold">316 icons</span>
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
					className="flex justify-center pt-4"
					{...PAGE_ANIMATIONS.heroSearch}
				>
					<div className="relative w-full max-w-xl">
						<svg
							aria-hidden
							className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-muted pointer-events-none"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={1.5}
							viewBox="0 0 24 24"
						>
							<circle cx={11} cy={11} r={8} />
							<path d="m21 21-4.35-4.35" />
						</svg>
						<input
							aria-label="Search icons"
							className="w-full h-14 pl-14 pr-6 text-base bg-surface border border-border rounded-xl text-foreground placeholder:text-muted outline-none focus:border-primary transition-colors"
							onChange={(e) => onSearchChange?.(e.target.value)}
							placeholder="Search 316 icons..."
							type="text"
							value={searchValue}
						/>
					</div>
				</motion.div>

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
