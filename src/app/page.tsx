import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Skills from "@/components/Skill";
import Work from "@/components/Work";

export default function Home() {
	return (
		<main className="mb-10 flex flex-col items-center">
			<Hero />
			<About />
			<Skills />
			<Work />
			<Contact />
		</main>
	);
}
