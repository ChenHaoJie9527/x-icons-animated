import { FileTextIcon } from "./icons/file-text";
import type { IconMeta } from "./types";

const ICON_LIST: IconMeta[] = (
	[
		{
			name: "file-text",
			icon: FileTextIcon,
			keywords: ["file", "document", "text", "page", "note"],
		},
	] satisfies IconMeta[]
).sort((a, b) => a.name.localeCompare(b.name));

export { ICON_LIST };
