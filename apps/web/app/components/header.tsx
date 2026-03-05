"use client";

import { Button } from "@base-ui/react";
import { motion } from "motion/react";
import { ThemeToggle } from "@/components/theme-toggle";
import { GithubIcon } from "@/icons/github";
import { PAGE_ANIMATIONS } from "@/lib/animation-timeline";
import type { IconMeta } from "@/lib/icon-types";

type Icon = Pick<IconMeta, "name" | "keywords">;

interface HeaderProps {
	icons: Icon[];
}

export function Header({ icons }: HeaderProps) {
	return (
		<header className="flex items-center gap-8 h-14 py-3 mx-auto container justify-between">
			<motion.div
				className="flex items-center gap-2 shrink-0"
				{...PAGE_ANIMATIONS.headerLeft}
			>
				<span className="text-xl font-semibold text-foreground">x-icons</span>
				<span className="px-2 py-0.5 text-xs bg-primary text-background rounded-full">
					animated
				</span>
			</motion.div>

			<motion.div
				className="flex items-center gap-4 shrink-0"
				{...PAGE_ANIMATIONS.headerRight}
			>
				<span className="text-sm text-muted md:hidden">
					{icons.length} {icons.length === 1 ? "icon" : "icons"}
				</span>
				<ThemeToggle />
				<Button className="text-sm text-foreground hover:text-primary transition-colors border-border border bg-surface  rounded size-9 flex items-center justify-center">
					<GithubIcon />
				</Button>
			</motion.div>
		</header>
	);
}
