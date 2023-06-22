import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/services/firebase";
import { ProjectsData } from "@/interfaces/ProjectsData";

export async function GET() {
	let data: ProjectsData[] = [];

	const dbRef = collection(db, "projects");
	const q = query(dbRef, orderBy("order", "asc"));
	const docsSnap = await getDocs(q);

	docsSnap.forEach((doc) => {
		data.push({ ...(doc.data() as ProjectsData) });
	});

	return new Response(JSON.stringify(data));
}
