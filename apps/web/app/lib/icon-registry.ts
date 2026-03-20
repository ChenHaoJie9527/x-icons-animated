import { AcademicCapIcon as HeroiconsAcademicCapIcon } from "@/icons/heroicons/academic-cap";
import { AdjustmentsHorizontalIcon as HeroiconsAdjustmentsHorizontalIcon } from "@/icons/heroicons/adjustments-horizontal";
import { AdjustmentsVerticalIcon as HeroiconsAdjustmentsVerticalIcon } from "@/icons/heroicons/adjustments-vertical";
import { ArchiveBoxArrowDownIcon as HeroiconsArchiveBoxArrowDownIcon } from "@/icons/heroicons/archive-box-arrow-down";
import { ArchiveBoxXMarkIcon as HeroiconsArchiveBoxXMarkIcon } from "@/icons/heroicons/archive-box-x-mark";
import { ArrowDownIcon as HeroiconsArrowDownIcon } from "@/icons/heroicons/arrow-down";
import { ArrowDownCircleIcon as HeroiconsArrowDownCircleIcon } from "@/icons/heroicons/arrow-down-circle";
import { ArrowDownLeftIcon as HeroiconsArrowDownLeftIcon } from "@/icons/heroicons/arrow-down-left";
import { ArrowDownRightIcon as HeroiconsArrowDownRightIcon } from "@/icons/heroicons/arrow-down-right";
import { ArrowDownTrayIcon as HeroiconsArrowDownTrayIcon } from "@/icons/heroicons/arrow-down-tray";
import { ArrowLeftIcon as HeroiconsArrowLeftIcon } from "@/icons/heroicons/arrow-left";
import { ArrowLeftCircleIcon as HeroiconsArrowLeftCircleIcon } from "@/icons/heroicons/arrow-left-circle";
import { ArrowLogDownIcon as HeroiconsArrowLogDownIcon } from "@/icons/heroicons/arrow-log-down";
import { ArrowPathRoundedSquareIcon as HeroiconsArrowPathRoundedSquareIcon } from "@/icons/heroicons/arrow-path-rounded-square";
import { ArrowRightIcon as HeroiconsArrowRightIcon } from "@/icons/heroicons/arrow-right";
import { ArrowRightCircleIcon as HeroiconsArrowRightCircleIcon } from "@/icons/heroicons/arrow-right-circle";
import { CheckMarkBadge1Icon as HeroiconsCheckMarkBadge1Icon } from "@/icons/heroicons/check-mark-badge-1";
import { CopyPathIcon as HeroiconsCopyPathIcon } from "@/icons/heroicons/copy-path";
import { GithubIcon as HeroiconsGithubIcon } from "@/icons/heroicons/github";
import { HomeIcon as HeroiconsHomeIcon } from "@/icons/heroicons/home";
import { MoonIcon as HeroiconsMoonIcon } from "@/icons/heroicons/moon";
import { RssIcon as HeroiconsRssIcon } from "@/icons/heroicons/rss";
import { SunIcon as HeroiconsSunIcon } from "@/icons/heroicons/sun";
import { WifiIcon as HeroiconsWifiIcon } from "@/icons/heroicons/wifi";
import { AiChat2Icon as HugeiconsAiChat2Icon } from "@/icons/hugeicons/ai-chat-2";
import { Alert1Icon as HugeiconsAlert1Icon } from "@/icons/hugeicons/alert-1";
import { BadgeAlertIcon as HugeiconsBadgeAlertIcon } from "@/icons/hugeicons/badge-alert";
import { NotificationOff01Icon as HugeiconsNotificationOff01Icon } from "@/icons/hugeicons/notification-off-01";
import { BellRingIcon as LucideBellRingIcon } from "@/icons/lucide/bell-ring";
import { ArrowsInSimpleIcon as PhosphorArrowsInSimpleIcon } from "@/icons/phosphor/arrows-in-simple";
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
		name: "arrow-path-rounded-square",
		icon: HeroiconsArrowPathRoundedSquareIcon,
		source: "heroicons" as const,
		keywords: ["arrow", "path", "rounded", "square"],
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
		name: "rss",
		icon: HeroiconsRssIcon,
		source: "heroicons" as const,
		keywords: ["rss"],
	},
	{
		name: "sun",
		icon: HeroiconsSunIcon,
		source: "heroicons" as const,
		keywords: ["sun"],
	},
	{
		name: "wifi",
		icon: HeroiconsWifiIcon,
		source: "heroicons" as const,
		keywords: ["wifi"],
	},
	{
		name: "ai-chat-2",
		icon: HugeiconsAiChat2Icon,
		source: "hugeicons" as const,
		keywords: ["ai", "chat", "2"],
	},
	{
		name: "alert-1",
		icon: HugeiconsAlert1Icon,
		source: "hugeicons" as const,
		keywords: ["alert", "1"],
	},
	{
		name: "badge-alert",
		icon: HugeiconsBadgeAlertIcon,
		source: "hugeicons" as const,
		keywords: ["badge", "alert"],
	},
	{
		name: "notification-off-01",
		icon: HugeiconsNotificationOff01Icon,
		source: "hugeicons" as const,
		keywords: ["notification", "off", "01"],
	},
	{
		name: "bell-ring",
		icon: LucideBellRingIcon,
		source: "lucide" as const,
		keywords: ["bell", "ring"],
	},
	{
		name: "arrows-in-simple",
		icon: PhosphorArrowsInSimpleIcon,
		source: "phosphor" as const,
		keywords: ["arrows", "in", "simple"],
	},
].sort((a, b) => {
	const nameCompare = a.name.localeCompare(b.name);
	if (nameCompare !== 0) {
		return nameCompare;
	}
	return a.source.localeCompare(b.source);
});

export { ICON_LIST };
