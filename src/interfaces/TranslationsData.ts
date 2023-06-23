export interface AboutProps {
	id: string;
	title: string;
	text: string;
}

export interface ContactProps {
	button: string;
	email: string;
	id: string;
	message: string;
	name: string;
	title: string;
}

export interface HeroProps {
	id: string;
	job: string;
	name: string;
	presentation: string;
	small_about: string;
	work: string;
	work_id: string;
}

export interface WorkProps {
	click: string;
	hover: string;
	id: string;
	live: string;
	source: string;
	title: string;
}

export interface TranslationsData {
	about: AboutProps;
	contact: ContactProps;
	hero: HeroProps;
	work: WorkProps;
}
