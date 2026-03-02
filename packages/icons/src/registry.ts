import { HomeIcon } from "./icons/home";
import type { IconMeta } from "./types";

const ICON_LIST: IconMeta[] = (
	[
		{
			name: "home",
			icon: HomeIcon,
			keywords: ["home", "house", "building", "location", "address"],
		},
	] satisfies IconMeta[]
).sort((a, b) => a.name.localeCompare(b.name));

export { ICON_LIST };
