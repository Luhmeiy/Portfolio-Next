import { HeroProps } from "@/interfaces/TranslationsData";
import { ArrowRight } from "lucide-react";

export default function Hero(hero: HeroProps) {
	return (
		<div
			className="flex min-h-screen w-full max-w-6xl items-center py-10 [@media(max-width:1152px)]:px-4"
			id={hero.id}
		>
			<div>
				<span className="text-3xl font-bold text-gray-700">
					{hero.presentation}
				</span>
				<h1 className="mb-5 text-8xl font-bold text-purple-600 max-tablet:text-5xl">
					{hero.name}
				</h1>
				<p className="mb-2 text-2xl font-bold text-gray-700 max-tablet:text-xl">
					{hero.job}
				</p>
				<p className="mb-5 max-w-lg text-lg text-gray-500">
					{hero.small_about}
				</p>

				<a
					href={`#${hero.work_id}`}
					aria-label={`Scroll to ${hero.work_id}`}
					className="group inline-flex items-center gap-4 rounded-lg bg-purple-600 px-8 py-4 text-xl font-bold text-white transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-white active:bg-purple-500"
				>
					<span className="transition-all">{hero.work}</span>
					<ArrowRight
						size={24}
						className="transition-all group-hover:ml-6"
					/>
				</a>
			</div>
		</div>
	);
}
