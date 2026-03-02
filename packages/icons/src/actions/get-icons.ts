import { ICON_LIST } from "../registry";
import type { IconMeta } from "../types";

type IconInfo = Pick<IconMeta, "name" | "keywords">;

export function getIcons(): IconInfo[] {
	return ICON_LIST.map(({ name, keywords }) => ({
		name,
		keywords,
	}));
}
