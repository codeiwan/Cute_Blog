import PostTemplate from "../post-template"

export default function Post1() {
  return (
    <PostTemplate
      title="My First Adventure"
      date="2023-06-15"
      tags={["adventure", "coding", "beginners"]}
      coverImage="/placeholder.svg?height=400&width=800"
      content={
        <>
          <p>
            Welcome to my very first blog post! Today marks the beginning of an exciting journey into the world of
            blogging and coding. I've always been fascinated by technology and creative expression, and this blog is
            where these two passions meet.
          </p>

          <h2>Why I Started This Blog</h2>
          <p>
            I created this space to document my learning process, share interesting discoveries, and connect with
            like-minded individuals. There's something magical about putting your thoughts into words and sharing them
            with the world.
          </p>

          <p>
            As a beginner in the coding world, I've found that explaining concepts to others helps solidify my own
            understanding. So, expect plenty of beginner-friendly tutorials and explanations as I learn and grow.
          </p>

          <h2>What to Expect</h2>
          <p>This blog will feature:</p>
          <ul>
            <li>Coding tutorials and tips</li>
            <li>My learning journey and challenges</li>
            <li>Fun projects and experiments</li>
            <li>Thoughts on technology and creativity</li>
          </ul>

          <h2>My First Coding Project</h2>
          <p>
            I'm particularly excited about the Python playground I've built into this blog. It allows me (and you!) to
            write and run Python code directly in the browser. Here's a simple example of what you can do:
          </p>

          <pre>
            <code>
              {`# My first Python program
print("Hello, World!")

# A simple function
def calculate_area(radius):
    return 3.14 * radius * radius

# Calculate the area of a circle with radius 5
area = calculate_area(5)
print(f"The area of the circle is {area}")`}
            </code>
          </pre>

          <p>
            Feel free to try it out in the{" "}
            <a href="/playground" className="text-blue-600 hover:text-blue-800">
              Python Playground
            </a>
            !
          </p>

          <h2>Join Me on This Journey</h2>
          <p>
            I'm just getting started, and I have so much to learn. I'd love for you to join me on this adventure.
            Whether you're a seasoned developer or a complete beginner like me, I hope you'll find something valuable
            here.
          </p>

          <p>Stay tuned for more posts coming soon. Until then, happy coding!</p>
        </>
      }
    />
  )
}

