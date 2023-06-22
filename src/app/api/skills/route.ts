import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/services/firebase";
import { SkillsData } from "@/interfaces/SkillsData";

export async function GET() {
	let data: SkillsData[] = [];

	const dbRef = collection(db, "skills");
	const q = query(dbRef, orderBy("order", "asc"));
	const docsSnap = await getDocs(q);

	docsSnap.forEach((doc) => {
		data.push({ ...(doc.data() as SkillsData) });
	});

	return new Response(JSON.stringify(data));
}
