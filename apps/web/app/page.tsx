import { getIcons } from "@/actions/get-icons";
import { PageContent } from "@/components/page-content";

const icons = getIcons();

export default function Home() {
	return <PageContent icons={icons} />;
}
