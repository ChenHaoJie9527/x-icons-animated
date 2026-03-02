import { HomeIcon } from "./icons/home";

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
].sort((a, b) => a.name.localeCompare(b.name));

export { ICON_LIST };
