"use client";

import { Tabs as BaseTabs } from "@base-ui/react";
import { cn } from "@x-icons/utils/cn";
import { motion } from "motion/react";
import {
	useCallback,
	useEffect,
	useLayoutEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import { PAGE_ANIMATIONS } from "@/lib/animation-timeline";
import type { IconFilterSource, IconMeta, IconSource } from "@/lib/icon-types";

type Icon = Pick<IconMeta, "source">;
type TabItem = { count: number; label: string; value: IconFilterSource };

const SOURCE_LABELS: Record<IconSource, string> = {
	heroicons: "Heroicons",
	hugeicons: "Hugeicons",
	lucide: "Lucide",
	phosphor: "Phosphor",
};
const SOURCE_ORDER: IconSource[] = [
	"heroicons",
	"lucide",
	"phosphor",
	"hugeicons",
];

interface TabsProps {
	icons: Icon[];
	onValueChange: (value: IconFilterSource) => void;
	value: IconFilterSource;
}

const Tabs = ({ icons, onValueChange, value }: TabsProps) => {
	const listRef = useRef<HTMLDivElement | null>(null);
	const tabRefs = useRef<Partial<Record<IconFilterSource, HTMLElement | null>>>(
		{}
	);
	const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
	// 基于 icon.source 统计数量，并按预设顺序 + 动态来源生成 tabs。
	const tabItems = useMemo<TabItem[]>(() => {
		const sourceCounts = new Map<IconSource, number>();
		for (const icon of icons) {
			const currentCount = sourceCounts.get(icon.source) ?? 0;
			sourceCounts.set(icon.source, currentCount + 1);
		}

		const orderedSources = SOURCE_ORDER.filter(
			(source) => (sourceCounts.get(source) ?? 0) > 0
		);
		const dynamicSources = [...sourceCounts.keys()].filter(
			(source) => !SOURCE_ORDER.includes(source)
		);
		const finalSources = [...orderedSources, ...dynamicSources];

		return [
			{
				count: icons.length,
				label: "All",
				value: "all",
			},
			...finalSources.map((source) => ({
				count: sourceCounts.get(source) ?? 0,
				label: SOURCE_LABELS[source] ?? source,
				value: source,
			})),
		];
	}, [icons]);
	// 外部 value 可能因筛选源变化而失效，safeValue 用于兜底到 all。
	const hasActiveTab = tabItems.some((tab) => tab.value === value);
	const safeValue = hasActiveTab ? value : "all";

	// 当当前 value 不再存在于 tabItems 时，主动回退并同步给父组件。
	useEffect(() => {
		if (!hasActiveTab && value !== "all") {
			onValueChange("all");
		}
	}, [hasActiveTab, onValueChange, value]);

	// 通过 active tab 与列表容器的相对位置计算高亮指示器。
	const updateIndicator = useCallback(() => {
		const activeTabElement = tabRefs.current[safeValue];
		const listElement = listRef.current;

		if (!(activeTabElement && listElement)) {
			return;
		}
		// getBoundingClientRect：获取元素相对于视口的位置和大小。
		const tabRect = activeTabElement.getBoundingClientRect();
		// 获取列表容器相对于视口的位置和大小。
		const listRect = listElement.getBoundingClientRect();
		setIndicatorStyle({
			left: tabRect.left - listRect.left,
			width: tabRect.width,
		});
	}, [safeValue]);

	// 在浏览器绘制前同步更新位置，避免初次渲染出现指示器跳动。
	useLayoutEffect(() => {
		updateIndicator();
	}, [updateIndicator]);

	// 监听窗口尺寸变化，保证指示器在响应式布局下持续对齐。
	useEffect(() => {
		window.addEventListener("resize", updateIndicator);
		return () => {
			window.removeEventListener("resize", updateIndicator);
		};
	}, [updateIndicator]);

	return (
		<motion.div {...PAGE_ANIMATIONS.tabs}>
			<BaseTabs.Root
				defaultValue="all"
				onValueChange={(nextValue) =>
					onValueChange(nextValue as IconFilterSource)
				}
				value={safeValue}
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
					{tabItems.map((tab, index) => (
						<BaseTabs.Tab
							className={cn(
								"relative z-10 cursor-pointer rounded-full px-2 py-3 text-sm font-semibold transition-colors duration-200 ",
								safeValue === tab.value
									? "text-slate-900"
									: "text-slate-500 hover:text-slate-700"
							)}
							key={`${tab.value}-${index}`}
							ref={(element) => {
								tabRefs.current[tab.value] = element;
							}}
							value={tab.value}
						>
							{tab.label} ({tab.count})
						</BaseTabs.Tab>
					))}
				</BaseTabs.List>
			</BaseTabs.Root>
		</motion.div>
	);
};

Tabs.displayName = "Tabs";
export { Tabs };
