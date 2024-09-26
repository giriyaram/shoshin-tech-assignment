import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=''>
      <Link href="/dashboard">
        <div className="px-4 py-2 bg-vaistumOrange text-white">
          Go to Dashboard
        </div>
      </Link>
    </div>
  );
}
