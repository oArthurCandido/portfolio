import ProjectsSession from "@/sections/ProjectsSession";
import TopSection from "@/sections/TopSection";
import ContactSession from "@/sections/ContactSession";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <TopSection dictionary={dictionary["top-nav"]} />
      <ProjectsSession dictionary={dictionary["projects"]} />
      <ContactSession dictionary={dictionary["contact"]} />
    </div>
  );
}
