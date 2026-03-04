"use client";

import { ICON_LIST } from "@x-icons/icons/registry";
import type { IconAnimationHandle, IconMeta } from "@x-icons/icons/types";
import { useDeferredValue, useMemo, useRef, useState } from "react";

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
		<div className="flex flex-col h-full">
			<div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
				<span className="text-sm text-muted">
					{searchValue.trim()
						? `${filteredIcons.length} result${filteredIcons.length !== 1 ? "s" : ""} for "${searchValue}"`
						: "All icons"}
				</span>
				<span className="text-xs font-(family-name:--font-geist-mono) text-subtle tabular-nums">
					{filteredIcons.length} / {icons.length}
				</span>
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
				<div className="grid grid-cols-[repeat(auto-fill,minmax(128px,1fr))] gap-px flex-1 content-start">
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
		</div>
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
			className="group flex flex-col items-center justify-center gap-3 p-5 bg-background hover:bg-surface-hover transition-colors duration-150 cursor-pointer min-h-[128px]"
			onClick={() => onCopy(icon.name)}
			onMouseEnter={() => animatedRef.current?.startAnimation()}
			onMouseLeave={() => animatedRef.current?.stopAnimation()}
			title={`Copy "${icon.name}"`}
			type="button"
		>
			<Icon
				className="text-muted group-hover:text-primary transition-colors duration-150 [&>svg]:size-8"
				ref={animatedRef}
			/>
			<p className="text-xs font-(family-name:--font-geist-mono) text-subtle group-hover:text-muted transition-colors duration-150 truncate w-full text-center leading-none">
				{copied ? (
					<span className="text-primary">copied</span>
				) : (
					icon.name
				)}
			</p>
		</button>
	);
};
