import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col lg:items-center justify-center bg-gray-100 p-6">
    <h1 className="text-xl lg:text-3xl font-bold text-gray-800 mb-4">
      Welcome to My Frontend Developer Assignment!
    </h1>
    
    <p className="text-base lg:text-lg text-gray-600 text-justify lg:text-center mb-6 max-w-2xl">
    This is a simple, responsive webpage built using Next.js. It’s designed to look good on both desktop and mobile, showcasing my skills in frontend development. You can check out the dashboard to see how I've made things look and feel across different devices.
    </p>
    
    <h2 className="text-lg lg:text-2xl font-semibold text-left lg:text-center text-gray-700 mb-4">Explore the Dashboard</h2>
    
    <p className="text-base lg:text-lg text-gray-600 text-justify lg:text-center mb-6 max-w-2xl">
      On the <strong className="font-semibold">Dashboard</strong>, you will find:
    </p>

    <ul className="list-disc list-inside text-left text-gray-600 mb-6">
      <li className="mb-2"><strong className="font-semibold">Reusable components</strong> that show different sets of data.</li>
      <li className="mb-2"><strong className="font-semibold">Responsive layout</strong> that adapts smoothly between web and mobile screens.</li>
      
    </ul>

    {/* Link to the dashboard page */}
    <Link href="/dashboard">
      <span className="px-6 py-3 bg-vaistumOrange text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300">
        Go to the Dashboard
      </span>
    </Link>
  </div>
  );
}
