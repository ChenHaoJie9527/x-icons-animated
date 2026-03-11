import { AcademicCapIcon as HeroiconsAcademicCapIcon } from "@/icons/academic-cap";
import { AdjustmentsHorizontalIcon as HeroiconsAdjustmentsHorizontalIcon } from "@/icons/adjustments-horizontal";
import { AdjustmentsVerticalIcon as HeroiconsAdjustmentsVerticalIcon } from "@/icons/adjustments-vertical";
import { ArchiveBoxArrowDownIcon as HeroiconsArchiveBoxArrowDownIcon } from "@/icons/archive-box-arrow-down";
import { ArchiveBoxXMarkIcon as HeroiconsArchiveBoxXMarkIcon } from "@/icons/archive-box-x-mark";
import { ArrowDownIcon as HeroiconsArrowDownIcon } from "@/icons/arrow-down";
import { ArrowDownCircleIcon as HeroiconsArrowDownCircleIcon } from "@/icons/arrow-down-circle";
import { ArrowDownLeftIcon as HeroiconsArrowDownLeftIcon } from "@/icons/arrow-down-left";
import { ArrowDownRightIcon as HeroiconsArrowDownRightIcon } from "@/icons/arrow-down-right";
import { ArrowDownTrayIcon as HeroiconsArrowDownTrayIcon } from "@/icons/arrow-down-tray";
import { ArrowLeftIcon as HeroiconsArrowLeftIcon } from "@/icons/arrow-left";
import { ArrowLeftCircleIcon as HeroiconsArrowLeftCircleIcon } from "@/icons/arrow-left-circle";
import { ArrowLogDownIcon as HeroiconsArrowLogDownIcon } from "@/icons/arrow-log-down";
import { ArrowRightIcon as HeroiconsArrowRightIcon } from "@/icons/arrow-right";
import { ArrowRightCircleIcon as HeroiconsArrowRightCircleIcon } from "@/icons/arrow-right-circle";
import { CheckMarkBadge1Icon as HeroiconsCheckMarkBadge1Icon } from "@/icons/check-mark-badge-1";
import { CopyPathIcon as HeroiconsCopyPathIcon } from "@/icons/copy-path";
import { GithubIcon as HeroiconsGithubIcon } from "@/icons/github";
import { HomeIcon as HeroiconsHomeIcon } from "@/icons/home";
import { MoonIcon as HeroiconsMoonIcon } from "@/icons/moon";
import { SunIcon as HeroiconsSunIcon } from "@/icons/sun";
import { BellRingIcon as LucideBellRingIcon } from "@/icons/lucide/bell-ring";
import type { IconMeta } from "@/lib/icon-types";

const ICON_LIST: IconMeta[] = [
	{
		name: "academic-cap",
		icon: HeroiconsAcademicCapIcon,
		source: "heroicons" as const,
		keywords: ["academic", "cap"],
	},
	{
		name: "adjustments-horizontal",
		icon: HeroiconsAdjustmentsHorizontalIcon,
		source: "heroicons" as const,
		keywords: ["adjustments", "horizontal"],
	},
	{
		name: "adjustments-vertical",
		icon: HeroiconsAdjustmentsVerticalIcon,
		source: "heroicons" as const,
		keywords: ["adjustments", "vertical"],
	},
	{
		name: "archive-box-arrow-down",
		icon: HeroiconsArchiveBoxArrowDownIcon,
		source: "heroicons" as const,
		keywords: ["archive", "box", "arrow", "down"],
	},
	{
		name: "archive-box-x-mark",
		icon: HeroiconsArchiveBoxXMarkIcon,
		source: "heroicons" as const,
		keywords: ["archive", "box", "x", "mark"],
	},
	{
		name: "arrow-down",
		icon: HeroiconsArrowDownIcon,
		source: "heroicons" as const,
		keywords: ["arrow", "down"],
	},
	{
		name: "arrow-down-circle",
		icon: HeroiconsArrowDownCircleIcon,
		source: "heroicons" as const,
		keywords: ["arrow", "down", "circle"],
	},
	{
		name: "arrow-down-left",
		icon: HeroiconsArrowDownLeftIcon,
		source: "heroicons" as const,
		keywords: ["arrow", "down", "left"],
	},
	{
		name: "arrow-down-right",
		icon: HeroiconsArrowDownRightIcon,
		source: "heroicons" as const,
		keywords: ["arrow", "down", "right"],
	},
	{
		name: "arrow-down-tray",
		icon: HeroiconsArrowDownTrayIcon,
		source: "heroicons" as const,
		keywords: ["arrow", "down", "tray"],
	},
	{
		name: "arrow-left",
		icon: HeroiconsArrowLeftIcon,
		source: "heroicons" as const,
		keywords: ["arrow", "left"],
	},
	{
		name: "arrow-left-circle",
		icon: HeroiconsArrowLeftCircleIcon,
		source: "heroicons" as const,
		keywords: ["arrow", "left", "circle"],
	},
	{
		name: "arrow-log-down",
		icon: HeroiconsArrowLogDownIcon,
		source: "heroicons" as const,
		keywords: ["arrow", "log", "down"],
	},
	{
		name: "arrow-right",
		icon: HeroiconsArrowRightIcon,
		source: "heroicons" as const,
		keywords: ["arrow", "right"],
	},
	{
		name: "arrow-right-circle",
		icon: HeroiconsArrowRightCircleIcon,
		source: "heroicons" as const,
		keywords: ["arrow", "right", "circle"],
	},
	{
		name: "check-mark-badge-1",
		icon: HeroiconsCheckMarkBadge1Icon,
		source: "heroicons" as const,
		keywords: ["check", "mark", "badge", "1"],
	},
	{
		name: "copy-path",
		icon: HeroiconsCopyPathIcon,
		source: "heroicons" as const,
		keywords: ["copy", "path"],
	},
	{
		name: "github",
		icon: HeroiconsGithubIcon,
		source: "heroicons" as const,
		keywords: ["github"],
	},
	{
		name: "home",
		icon: HeroiconsHomeIcon,
		source: "heroicons" as const,
		keywords: ["home"],
	},
	{
		name: "moon",
		icon: HeroiconsMoonIcon,
		source: "heroicons" as const,
		keywords: ["moon"],
	},
	{
		name: "sun",
		icon: HeroiconsSunIcon,
		source: "heroicons" as const,
		keywords: ["sun"],
	},
	{
		name: "bell-ring",
		icon: LucideBellRingIcon,
		source: "lucide" as const,
		keywords: ["bell", "ring"],
	},
].sort((a, b) => {
	const nameCompare = a.name.localeCompare(b.name);
	if (nameCompare !== 0) {
		return nameCompare;
	}
	return a.source.localeCompare(b.source);
});

export { ICON_LIST };
