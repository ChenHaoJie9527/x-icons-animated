import { ICON_LIST } from "@/lib/icon-registry";
import type { IconMeta } from "@/lib/icon-types";

type IconInfo = Pick<IconMeta, "name" | "keywords" | "source">;

export function getIcons(): IconInfo[] {
	return ICON_LIST.map(({ name, keywords, source }) => ({
		name,
		keywords,
		source,
	}));
}
