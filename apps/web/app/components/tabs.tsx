"use client";

import { Tabs as BaseTabs } from "@base-ui/react";
import { cn } from "@x-icons/utils/cn";
import {
	useCallback,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from "react";

const TAB_ITEMS = [
	{ label: "Heroicons", value: "heroicons" },
	{ label: "Lucide", value: "lucide" },
	{ label: "Phosphor", value: "phosphor" },
] as const;

type TabValue = (typeof TAB_ITEMS)[number]["value"];

const Tabs = () => {
	const [activeTab, setActiveTab] = useState<TabValue>("heroicons");
	const listRef = useRef<HTMLDivElement | null>(null);
	const tabRefs = useRef<Record<TabValue, HTMLElement | null>>({
		heroicons: null,
		lucide: null,
		phosphor: null,
	});
	const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

	const updateIndicator = useCallback(() => {
		const activeTabElement = tabRefs.current[activeTab];
		const listElement = listRef.current;

		if (!(activeTabElement && listElement)) {
			return;
		}

		const tabRect = activeTabElement.getBoundingClientRect();
		const listRect = listElement.getBoundingClientRect();

		setIndicatorStyle({
			left: tabRect.left - listRect.left,
			width: tabRect.width,
		});
	}, [activeTab]);

	useLayoutEffect(() => {
		updateIndicator();
	}, [updateIndicator]);

	useEffect(() => {
		window.addEventListener("resize", updateIndicator);
		return () => {
			window.removeEventListener("resize", updateIndicator);
		};
	}, [updateIndicator]);

	return (
		<BaseTabs.Root
			defaultValue="heroicons"
			onValueChange={(value) => setActiveTab(value as TabValue)}
			value={activeTab}
		>
			<BaseTabs.List
				className={cn("relative inline-flex items-center gap-1 rounded-full")}
				ref={listRef}
			>
				<div
					aria-hidden="true"
					className={cn(
						"pointer-events-none absolute bottom-1 top-1 rounded-full bg-primary transition-[left,width] duration-300 ease-in-out"
					)}
					style={{
						left: `${indicatorStyle.left}px`,
						width: `${indicatorStyle.width}px`,
					}}
				/>
				{TAB_ITEMS.map((tab) => (
					<BaseTabs.Tab
						className={cn(
							"relative z-10 cursor-pointer rounded-full px-2 py-3 text-sm font-semibold transition-colors duration-200 ",
							activeTab === tab.value
								? "text-slate-900"
								: "text-slate-500 hover:text-slate-700"
						)}
						key={tab.value}
						ref={(element) => {
							tabRefs.current[tab.value] = element;
						}}
						value={tab.value}
					>
						{tab.label}
					</BaseTabs.Tab>
				))}
			</BaseTabs.List>
		</BaseTabs.Root>
	);
};

Tabs.displayName = "Tabs";
export { Tabs };
