import { AcademicCapIcon } from "@/icons/academic-cap";
import { ArrowDownIcon } from "@/icons/arrow-down";
import { ArrowDownCircleIcon } from "@/icons/arrow-down-circle";
import { ArrowDownLeftIcon } from "@/icons/arrow-down-left";
import { ArrowDownRightIcon } from "@/icons/arrow-down-right";
import { ArrowLeftIcon } from "@/icons/arrow-left";
import { ArrowLogDownIcon } from "@/icons/arrow-log-down";
import { ArrowRightIcon } from "@/icons/arrow-right";
import { CheckMarkBadge1Icon } from "@/icons/check-mark-badge-1";
import { CopyPathIcon } from "@/icons/copy-path";
import { GithubIcon } from "@/icons/github";
import { HomeIcon } from "@/icons/home";
import { MoonIcon } from "@/icons/moon";
import { SunIcon } from "@/icons/sun";
import type { IconMeta } from "@/lib/icon-types";

const ICON_LIST: IconMeta[] = [
	{
		name: "academic-cap",
		icon: AcademicCapIcon,
		keywords: ["academic", "cap"],
	},
	{
		name: "arrow-down",
		icon: ArrowDownIcon,
		keywords: ["arrow", "down"],
	},
	{
		name: "arrow-down-circle",
		icon: ArrowDownCircleIcon,
		keywords: ["arrow", "down", "circle"],
	},
	{
		name: "arrow-down-left",
		icon: ArrowDownLeftIcon,
		keywords: ["arrow", "down", "left"],
	},
	{
		name: "arrow-down-right",
		icon: ArrowDownRightIcon,
		keywords: ["arrow", "down", "right"],
	},
	{
		name: "arrow-left",
		icon: ArrowLeftIcon,
		keywords: ["arrow", "left"],
	},
	{
		name: "arrow-log-down",
		icon: ArrowLogDownIcon,
		keywords: ["arrow", "log", "down"],
	},
	{
		name: "arrow-right",
		icon: ArrowRightIcon,
		keywords: ["arrow", "right"],
	},
	{
		name: "check-mark-badge-1",
		icon: CheckMarkBadge1Icon,
		keywords: ["check", "mark", "badge", "1"],
	},
	{
		name: "copy-path",
		icon: CopyPathIcon,
		keywords: ["copy", "path"],
	},
	{
		name: "github",
		icon: GithubIcon,
		keywords: ["github"],
	},
	{
		name: "home",
		icon: HomeIcon,
		keywords: ["home"],
	},
	{
		name: "moon",
		icon: MoonIcon,
		keywords: ["moon"],
	},
	{
		name: "sun",
		icon: SunIcon,
		keywords: ["sun"],
	},
].sort((a, b) => a.name.localeCompare(b.name));

export { ICON_LIST };
