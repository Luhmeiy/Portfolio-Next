import Image from "next/image";
import { ProjectsData } from "@/interfaces/ProjectsData";
import { WorkProps } from "@/interfaces/TranslationsData";
import { Github, Monitor } from "lucide-react";

export default async function Work(work: WorkProps) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_FETCH_URL}/api/projects`
	);
	const projects: ProjectsData[] = await response.json();

	return (
		<div
			className="flex min-h-screen w-full flex-col items-center justify-center py-10 tablet:pt-28"
			id={work.id}
		>
			<div className="relative flex w-full max-w-6xl flex-col transition-all duration-[.75s] ease-in-out [@media(max-width:1152px)]:px-4">
				<div className="mb-10 text-center">
					<h1 className="text-7xl font-bold">{work.title}</h1>

					<p className="hidden tablet:inline-block">{work.hover}</p>
					<p className="hidden max-tablet:inline-block">
						{work.click}
					</p>
				</div>

				<div className="grid w-full grid-cols-2 gap-6 max-tablet:grid-cols-1">
					{projects &&
						projects.map((item: ProjectsData) => (
							<div
								key={item.title}
								className="group relative flex items-center justify-center shadow-lg"
							>
								<Image
									src={item.imgurl}
									alt={item.title}
									width="650"
									height="400"
								/>

								<div className="absolute h-full w-full bg-[rgba(0,_0,_0,_.5)] opacity-0 transition-all duration-300 group-hover:opacity-100"></div>

								<div className="absolute opacity-0 transition-all duration-300 group-hover:opacity-100">
									<p className="text-center text-4xl font-bold text-white">
										{item.title}
									</p>

									{item.designby && (
										<p className="mt-1 max-w-xs text-center text-lg text-white">
											<span className="font-bold">
												Design:
											</span>{" "}
											{item.designby}
										</p>
									)}

									<div className="mt-4 flex flex-wrap justify-center gap-3">
										<a
											href={item.githublink}
											target="_blank"
											aria-label={`${work.source} - ${item.title}`}
											className="flex items-center justify-center gap-2 bg-white px-3 py-1 text-black transition-colors duration-500 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-white active:bg-gray-200"
										>
											<Github size={20} />
											{work.source}
										</a>

										{item.livepreview && (
											<a
												href={item.livepreview}
												target="_blank"
												aria-label={`${work.live} - ${item.title}`}
												className="flex items-center justify-center gap-2 bg-white px-3 py-1 text-black transition-colors duration-500 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-white active:bg-gray-200"
											>
												<Monitor size={20} />
												{work.live}
											</a>
										)}
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}
