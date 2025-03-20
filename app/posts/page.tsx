import Link from "next/link"

import postlist from "@/lib/postlist"

export default function Posts() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-pink-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center">
          <Link href="/" className="text-blue-600 hover:text-blue-800 mr-4">
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
            All Blog Posts
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {postlist.map((post) => (
            <Link href={`/posts/post-${post.id}`}>
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border-4 h-60"
              style={{
                borderColor: ["#FF5252", "#FFAB40", "#66BB6A", "#42A5F5", "#7E57C2"][post.id % 5],
              }}
            >
              <div
                className="h-4"
                style={{
                  backgroundColor: ["#FF5252", "#FFAB40", "#66BB6A", "#42A5F5", "#7E57C2"][post.id % 5],
                }}
              ></div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-2">Posted on {new Date(post.date).toLocaleDateString()}</p>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: ["#FFCDD2", "#FFE0B2", "#C8E6C9", "#BBDEFB", "#D1C4E9"][index % 5],
                        color: "#333",
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
