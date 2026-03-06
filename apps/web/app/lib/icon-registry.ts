import { ArrowDownCircleIcon } from "@/icons/arrow-down-circle";
import { GithubIcon } from "@/icons/github";
import { HomeIcon } from "@/icons/home";
import { MoonIcon } from "@/icons/moon";
import { SunIcon } from "@/icons/sun";
import type { IconMeta } from "@/lib/icon-types";

const ICON_LIST: IconMeta[] = [
	{
		name: "home",
		icon: HomeIcon,
		keywords: ["home", "house", "building", "location", "address"],
	},
	{
		name: "sun",
		icon: SunIcon,
		keywords: ["sun", "light", "brightness", "day", "weather"],
	},
	{
		name: "moon",
		icon: MoonIcon,
		keywords: ["moon", "dark", "night", "weather"],
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
		name: "arrow-down-circle",
		icon: ArrowDownCircleIcon,
		keywords: ["arrow", "down", "circle", "navigation"],
	},
].sort((a, b) => a.name.localeCompare(b.name));

export { ICON_LIST };
