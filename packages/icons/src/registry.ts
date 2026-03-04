import { HomeIcon } from "./icons/home";
import { SunIcon } from "./icons/sun";

interface IconMeta {
	name: string;
	icon: React.ElementType;
	keywords: string[];
}

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
].sort((a, b) => a.name.localeCompare(b.name));

export { ICON_LIST };
