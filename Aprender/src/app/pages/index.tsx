import Link from "next/link";
import { semesters } from "@/app/data/semesters.json";

export default function Home() {
  return (
    <div>
      <h1>Menu de Semestres</h1>
      <ul>
        {semesters.map((s) => (
          <li key={s.id}>
            <Link href={`/semestre/${s.id}`}>{`Semestre ${s.id}`}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
