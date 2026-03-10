"use client";

import { motion } from "motion/react";
import { useDeferredValue, useMemo, useRef, useState } from "react";
import { PAGE_ANIMATIONS } from "@/lib/animation-timeline";
import { ICON_LIST } from "@/lib/icon-registry";
import type { IconAnimationHandle, IconMeta } from "@/lib/icon-types";

type Icon = Pick<IconMeta, "name" | "keywords">;

type IconListProps = {
	icons: Icon[];
	searchValue?: string;
};

const ICON_MAP = new Map(ICON_LIST.map((item) => [item.name, item.icon]));

export const IconList = ({ icons, searchValue = "" }: IconListProps) => {
	const deferredSearchValue = useDeferredValue(searchValue);
	const [copiedName, setCopiedName] = useState<string | null>(null);

	const filteredIcons = useMemo(() => {
		const q = deferredSearchValue.trim().toLowerCase();
		if (!q) {
			return icons;
		}
		return icons.filter(
			(icon) =>
				icon.name.toLowerCase().includes(q) ||
				icon.keywords.some((kw) => kw.toLowerCase().includes(q))
		);
	}, [icons, deferredSearchValue]);

	const handleCopy = async (name: string) => {
		await navigator.clipboard.writeText(name);
		setCopiedName(name);
		setTimeout(() => setCopiedName(null), 1500);
	};

	return (
		<motion.div
			className="flex flex-col "
			{...PAGE_ANIMATIONS.heroIconsContent}
		>
			<div className=" py-4 shrink-0 space-y-1">
				<p className="text-sm text-muted mb-2 leading-relaxed">
					Explore 5103 <span className="text-primary">All icons</span> in SVG,
					React, Icon Font and more. Ideal for apps and websites.
				</p>
			</div>

			{filteredIcons.length === 0 ? (
				<div className="flex flex-col items-center justify-center flex-1 gap-4">
					<div className="text-4xl text-subtle font-(family-name:--font-geist-mono) select-none">
						[ ]
					</div>
					<p className="text-sm font-(family-name:--font-geist-mono) text-muted">
						no icons match &ldquo;{searchValue}&rdquo;
					</p>
				</div>
			) : (
				<div className="grid grid-cols-[repeat(auto-fill,minmax(96px,1fr))] gap-2 flex-1 content-start">
					{filteredIcons.map((icon) => (
						<IconItem
							copied={copiedName === icon.name}
							Icon={ICON_MAP.get(icon.name)}
							icon={icon}
							key={icon.name}
							onCopy={handleCopy}
						/>
					))}
				</div>
			)}
		</motion.div>
	);
};

interface IconItemProps {
	icon: Icon;
	Icon: React.ElementType | undefined;
	onCopy: (name: string) => Promise<void>;
	copied: boolean;
}

const IconItem = ({ icon, Icon, onCopy, copied }: IconItemProps) => {
	const animatedRef = useRef<IconAnimationHandle>(null);

	if (!Icon) {
		return null;
	}

	return (
		<button
			className="group flex flex-col items-center justify-center gap-3 border-[0.5px] rounded-xl size-24 border-icon-item-border bg-icon-item-bg hover:border-primary transition-colors duration-150 cursor-pointer"
			onClick={() => onCopy(icon.name)}
			onMouseEnter={() => animatedRef.current?.startAnimation()}
			onMouseLeave={() => animatedRef.current?.stopAnimation()}
			title={`Copy "${icon.name}"`}
			type="button"
		>
			<Icon
				className="text-muted group-hover:text-primary transition-colors duration-150"
				ref={animatedRef}
			/>
			<p className="text-xs font-(family-name:--font-geist-mono) text-subtle group-hover:text-primary transition-colors duration-150 truncate w-full text-center leading-none">
				{copied ? <span className="text-primary">copied</span> : icon.name}
			</p>
		</button>
	);
};
