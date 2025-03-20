import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-blue-100">
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 mb-4">
            My Cute Blog
          </h1>
          <p className="text-xl text-purple-700">Welcome to my colorful world!</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 border-4 border-yellow-400 hover:border-pink-400 transition-colors">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Latest Posts</h2>
            <ul className="space-y-4">
              {["My First Adventure", "Learning to Code", "Fun with Colors"].map((post, index) => (
                <li key={index} className="border-b-2 border-dotted border-blue-200 pb-2">
                  <Link
                    href={`/posts/post-${index + 1}`}
                    className="text-lg text-blue-600 hover:text-pink-600 transition-colors"
                  >
                    {post}
                  </Link>
                  <p className="text-gray-600">Posted on {new Date().toLocaleDateString()}</p>
                </li>
              ))}
            </ul>
            <Button className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              <Link href="/posts">View All Posts</Link>
            </Button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-4 border-blue-400 hover:border-green-400 transition-colors">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">Try Python Playground</h2>
            <p className="text-gray-700 mb-4">
              Write and run Python code directly in your browser! Perfect for learning and experimenting.
            </p>
            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <code className="text-sm text-purple-800">
                print("Hello, World!") <br />
                for i in range(5): <br />
                &nbsp;&nbsp;print("🌟" * i)
              </code>
            </div>
            <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
              <Link href="/playground">Open Playground</Link>
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 border-4 border-purple-400">
          <h2 className="text-2xl font-bold text-red-600 mb-4">About This Blog</h2>
          <p className="text-gray-700 mb-4">
            This is a cute, colorful blog with a candy cane cursor and star dust animation effects. It features a Python
            playground where you can write and run code, and templates for creating static blog posts.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Cute", "Colorful", "Python", "Coding", "Fun"].map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: ["#FF5252", "#FFAB40", "#FFEB3B", "#66BB6A", "#42A5F5", "#7E57C2"][index % 6],
                  color: index % 6 === 2 ? "#333" : "white",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

