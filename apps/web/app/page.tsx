import { getIcons } from "@x-icons/icons/actions/get-icons";
import { PageContent } from "./_components/page-content";

const icons = getIcons();

export default function Home() {
	return <PageContent icons={icons} />;
}
