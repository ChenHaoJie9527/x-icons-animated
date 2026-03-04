import { ICON_LIST } from "@/lib/icon-registry";
import type { IconMeta } from "@/lib/icon-types";

type IconInfo = Pick<IconMeta, "name" | "keywords">;

export function getIcons(): IconInfo[] {
	return ICON_LIST.map(({ name, keywords }) => ({
		name,
		keywords,
	}));
}
