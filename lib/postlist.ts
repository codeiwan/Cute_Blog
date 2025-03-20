interface post {
  id: number
  title: string
  excerpt: string
  date: string
  tags : string[]
}

const postlist : post[] = [
  {
    id: 1,
    title: "My First Adventure",
    excerpt: "Join me on my first adventure into the world of blogging and coding!",
    date: "2023-06-15",
    tags: ["adventure", "coding", "beginners"],
  },
  {
    id: 2,
    title: "박이완",
    excerpt: "메숭이 레전드",
    date: "2023-07-22",
    tags: ["python", "learning", "web-dev", "maple"],
  },
  {
    id: 2,
    title: "박이완",
    excerpt: "메숭이 레전드",
    date: "2023-07-22",
    tags: ["python", "learning", "web-dev", "maple"],
  },
  {
    id: 2,
    title: "박이완",
    excerpt: "메숭이 레전드",
    date: "2023-07-22",
    tags: ["python", "learning", "web-dev", "maple"],
  },
  {
    id: 3,
    title: "Fun with Colors",
    excerpt: "Exploring the psychology of colors and how they affect our mood and perception.",
    date: "2023-08-10",
    tags: ["colors", "design", "psychology"],
  },
  {
    id: 4,
    title: "The Magic of Animation",
    excerpt: "Discovering how simple animations can bring joy and life to web experiences.",
    date: "2023-09-05",
    tags: ["animation", "web", "design"],
  },
  {
    id: 5,
    title: "Candy Land Adventures",
    excerpt: "A sweet journey through the land of candy-inspired design and creativity.",
    date: "2023-10-18",
    tags: ["design", "creativity", "fun"],
  },
]

export default postlist