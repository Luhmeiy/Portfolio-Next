import Image from "next/image";
import { SkillsData } from "@/interfaces/SkillsData";

export default async function Skills() {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/skills`
	);
	const skills: SkillsData[] = await response.json();

	return (
		<div
			className="flex min-h-screen w-full flex-col items-center justify-center py-10"
			id="skills"
		>
			<div className="relative grid w-full max-w-6xl grid-cols-2 justify-center transition-all duration-[.75s] ease-in-out max-tablet:grid-cols-1 [@media(max-width:1152px)]:px-4">
				<div className="grid grid-cols-4 items-center justify-center gap-y-8 max-tablet:row-start-2 max-tablet:grid-cols-3">
					{skills.map((skill) => (
						<div
							key={`link-${skill.language}`}
							className="flex flex-col items-center"
						>
							<div className="mb-1 p-2 text-5xl">
								<Image
									src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}`}
									alt={skill.language}
									width="48"
									height="48"
								/>
							</div>

							<p className="text-gray-500">{skill.language}</p>
						</div>
					))}
				</div>

				<h1 className="mb-10 flex flex-col text-center text-7xl font-bold [-webkit-text-fill-color:transparent] [-webkit-text-stroke-color:gray] [-webkit-text-stroke:1px] before:content-['Skills'] before:[-webkit-text-fill-color:black] before:[-webkit-text-stroke-color:black] after:content-['Skills'] after:[-webkit-text-stroke-color:lightgray]">
					Skills
				</h1>
			</div>
		</div>
	);
}
