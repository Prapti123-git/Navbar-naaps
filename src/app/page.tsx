import Image from "next/image";
import Navbar from "./components/common/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="pt-16 px-6">
        <h1 className="text-3xl font-bold">Welcome to Look Loom</h1>
        <p className="mt-4 text-gray-600">This is the homepage content.</p>
      </main>
    </div>
  )
};