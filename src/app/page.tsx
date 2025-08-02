import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <section className="text-center p-6">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">Welcome to KhmerQuest</h1>
        <p className="text-lg text-gray-700 mb-6">
          Learn Khmer through personalized tutoring, interactive games, and cultural exploration.
        </p>
        <button className="px-6 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">
          Get Started
        </button>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Why KhmerQuest?</h2>
        <ul className="list-disc list-inside text-gray-700 text-left">
          <li>🎓 Expert Khmer Tutors</li>
          <li>🎮 Coming Soon: Interactive Language Game</li>
          <li>🌐 Convenient Online Scheduling & Payments</li>
          <li>🌐 More Stuff</li>
        </ul>
      </section>
    </main>
  );
}
