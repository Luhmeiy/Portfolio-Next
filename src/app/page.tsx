import { TranslationsData } from "@/interfaces/TranslationsData";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Skills from "@/components/Skill";
import Work from "@/components/Work";

export default async function Home() {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/translations?language=en`
	);
	const { about, contact, hero, work } =
		(await response.json()) as TranslationsData;

	return (
		<main className="mb-10 flex flex-col items-center">
			<Hero {...hero} />
			<About {...about} />
			<Skills />
			<Work {...work} />
			<Contact {...contact} />
		</main>
	);
}
