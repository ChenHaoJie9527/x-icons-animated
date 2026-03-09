import { ArrowDownCircleIcon } from "@/icons/arrow-down-circle";
import { ArrowLeftIcon } from "@/icons/arrow-left";
import { CheckMarkBadge1Icon } from "@/icons/check-mark-badge-1";
import { GithubIcon } from "@/icons/github";
import { HomeIcon } from "@/icons/home";
import { MoonIcon } from "@/icons/moon";
import { SunIcon } from "@/icons/sun";
import type { IconMeta } from "@/lib/icon-types";

const ICON_LIST: IconMeta[] = [
	{
		name: "arrow-down-circle",
		icon: ArrowDownCircleIcon,
		keywords: ["arrow", "down", "circle", "navigation"],
	},
	{
		name: "arrow-left",
		icon: ArrowLeftIcon,
		keywords: ["arrow", "left"],
	},
	{
		name: "check-mark-badge-1",
		icon: CheckMarkBadge1Icon,
		keywords: ["check", "mark", "badge", "1"],
	},
	{
		name: "github",
		icon: GithubIcon,
		keywords: [
			"github",
			"repository",
			"code",
			"version control",
			"open source",
		],
	},
	{
		name: "home",
		icon: HomeIcon,
		keywords: ["home", "house", "building", "location", "address"],
	},
	{
		name: "moon",
		icon: MoonIcon,
		keywords: ["moon", "dark", "night", "weather"],
	},
	{
		name: "sun",
		icon: SunIcon,
		keywords: ["sun", "light", "brightness", "day", "weather"],
	},
].sort((a, b) => a.name.localeCompare(b.name));

export { ICON_LIST };
