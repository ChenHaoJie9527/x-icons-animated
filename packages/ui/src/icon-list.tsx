import { ICON_LIST } from "@x-icons/icons/registry";
import type { IconAnimationHandle, IconMeta } from "@x-icons/icons/types";
import { useDeferredValue, useMemo, useRef, useState } from "react";

type Icon = Pick<IconMeta, "name" | "keywords">;

type IconListProps = {
	icons: Icon[];
};

const ICON_MAP = new Map(ICON_LIST.map((item) => [item.name, item.icon]));

export const IconList = ({ icons }: IconListProps) => {
	const [searchValue] = useState("");
	// const [searchOpen, setSearchOpen] = useState(false);
	const deferredSearchValue = useDeferredValue(searchValue);

	const filteredIcons = useMemo(() => {
		if (!deferredSearchValue.trim()) {
			return icons;
		}
		return icons.filter((icon) => icon.name.includes(deferredSearchValue));
	}, [icons, deferredSearchValue]);
	return (
		<div className="mb-20 w-full">
			<div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-[4px]">
				{filteredIcons.map((icon) => (
					<IconItem
						Icon={ICON_MAP.get(icon.name)}
						icon={icon}
						key={icon.name}
					/>
				))}
			</div>
		</div>
	);
};

interface IconItemProps {
	icon: Icon;
	Icon: React.ElementType | undefined;
}
const IconItem = ({ icon, Icon }: IconItemProps) => {
	const animatedRef = useRef<IconAnimationHandle>(null);

	if (!Icon) {
		return null;
	}

	return (
		<div
			key={icon.name}
			onMouseEnter={animatedRef.current?.startAnimation}
			onMouseLeave={animatedRef.current?.stopAnimation}
		>
			<Icon
				className="flex items-center justify-center [&>svg]:size-10 [&>svg]:text-neutral-800 dark:[&>svg]:text-neutral-100"
				ref={animatedRef}
			/>
			<p className="text-center text-sm text-neutral-500 dark:text-neutral-400">
				{icon.name}
			</p>
		</div>
	);
};
