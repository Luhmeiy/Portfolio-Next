import { ArrowRight } from "lucide-react";

export default function Hero() {
	return (
		<div
			className="flex min-h-screen w-full max-w-6xl items-center py-10 [@media(max-width:1152px)]:px-4"
			id="home"
		>
			<div>
				<span className="text-3xl font-bold text-gray-700">
					Hello there, I&apos;m
				</span>
				<h1 className="mb-5 text-8xl font-bold text-purple-600 max-tablet:text-5xl">
					Medeiros
				</h1>
				<p className="mb-2 text-2xl font-bold text-gray-600 max-tablet:text-xl">
					Full Stack Developer
				</p>
				<p className="mb-5 max-w-lg text-lg text-gray-500">
					Passionate about bringing creative ideas to life and
					tackling problems that will push my knowledge and skills
					further.
				</p>

				<a
					href="#work"
					className="group inline-flex items-center gap-4 rounded-lg bg-purple-600 px-8 py-4 text-xl font-bold text-white transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-white active:bg-purple-500"
				>
					<span className="transition-all">View My Projects</span>
					<ArrowRight
						size={24}
						className="transition-all group-hover:ml-6"
					/>
				</a>
			</div>
		</div>
	);
}
