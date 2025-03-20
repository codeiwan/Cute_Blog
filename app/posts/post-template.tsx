import type React from "react"
import Link from "next/link"
import Image from "next/image"

interface PostTemplateProps {
  title: string
  date: string
  content: React.ReactNode
  tags?: string[]
  coverImage?: string
}

export default function PostTemplate({
  title,
  date,
  content,
  tags = [],
  coverImage = "/placeholder.svg?height=400&width=800",
}: PostTemplateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-4">
          <Link href="/posts" className="text-blue-600 hover:text-blue-800">
            ← Back to Posts
          </Link>
        </div>

        <article className="bg-white rounded-2xl shadow-lg overflow-hidden border-4 border-purple-400">
          {coverImage && (
            <div className="relative h-64 md:h-80">
              <Image src={coverImage || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </div>
          )}

          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
              {title}
            </h1>

            <p className="text-gray-600 mb-6">Posted on {new Date(date).toLocaleDateString()}</p>

            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: ["#FFCDD2", "#FFE0B2", "#C8E6C9", "#BBDEFB", "#D1C4E9"][index % 5],
                      color: "#333",
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <div className="prose prose-lg max-w-none">{content}</div>
          </div>
        </article>
      </div>
    </div>
  )
}

