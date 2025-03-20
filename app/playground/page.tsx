"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function Playground() {
  const [code, setCode] = useState(`# Try writing some Python code here!
print("Hello, World!")

# Let's create a simple loop
for i in range(5):
    print("🌟" * i)

# Or define a function
def greet(name):
    return f"Hello, {name}!"

print(greet("Friend"))`)

  const [output, setOutput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [pyodideLoaded, setPyodideLoaded] = useState(false)
  const [pyodide, setPyodide] = useState<any>(null)

  useEffect(() => {
    async function loadPyodide() {
      try {
        setIsLoading(true)
        // Load Pyodide script
        const script = document.createElement("script")
        script.src = "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.js"
        script.async = true
        document.body.appendChild(script)

        script.onload = async () => {
          // @ts-ignore
          const pyodideInstance = await window.loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/",
          })
          setPyodide(pyodideInstance)
          setPyodideLoaded(true)
          setIsLoading(false)
        }
      } catch (error) {
        console.error("Failed to load Pyodide:", error)
        setOutput("Failed to load Python interpreter. Please try again later.")
        setIsLoading(false)
      }
    }

    loadPyodide()
  }, [])

  const runCode = async () => {
    if (!pyodideLoaded || !pyodide) {
      setOutput("Python interpreter is still loading. Please wait...")
      return
    }

    setIsLoading(true)
    setOutput("")

    try {
      // Redirect stdout to capture print statements
      pyodide.runPython(`
        import sys
        from io import StringIO
        sys.stdout = StringIO()
      `)

      // Run the user's code
      pyodide.runPython(code)

      // Get the captured output
      const stdout = pyodide.runPython("sys.stdout.getvalue()")
      setOutput(stdout)
    } catch (error: any) {
      setOutput(`Error: ${error.message}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex items-center">
          <Link href="/" className="text-blue-600 hover:text-blue-800 mr-4">
            ← Back to Home
          </Link>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-blue-500 to-purple-500">
            Python Playground
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 border-4 border-green-400">
            <h2 className="text-xl font-bold text-green-600 mb-4">Code Editor</h2>
            <Textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="font-mono h-96 text-sm p-4 bg-gray-50 border-2 border-gray-200"
              placeholder="Write your Python code here..."
            />
            <Button
              onClick={runCode}
              disabled={isLoading || !pyodideLoaded}
              className="mt-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
            >
              {isLoading ? "Running..." : "Run Code"}
            </Button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border-4 border-purple-400">
            <h2 className="text-xl font-bold text-purple-600 mb-4">Output</h2>
            <div className="font-mono h-96 bg-yellow text-green-400 p-4 rounded-lg overflow-auto whitespace-pre-wrap">
              {!pyodideLoaded && !output ? (
                <div className="animate-pulse">Loading Python interpreter...</div>
              ) : output ? (
                output
              ) : (
                "Run your code to see the output here!"
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6 border-4 border-yellow-400">
          <h2 className="text-xl font-bold text-orange-600 mb-4">Python Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Hello World",
                code: 'print("Hello, World!")',
              },
              {
                title: "For Loop",
                code: 'for i in range(5):\n    print(f"Count: {i}")',
              },
              {
                title: "Functions",
                code: 'def add(a, b):\n    return a + b\n\nprint(f"2 + 3 = {add(2, 3)}")',
              },
              {
                title: "Lists",
                code: 'fruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(fruit)',
              },
              {
                title: "Dictionaries",
                code: 'person = {"name": "Alice", "age": 25}\nfor key, value in person.items():\n    print(f"{key}: {value}")',
              },
              {
                title: "Turtle (Not supported)",
                code: '# Note: Turtle graphics are not supported in this playground\n# This is just a simulation\nprint("Drawing a square:")\nfor i in range(4):\n    print(f"Moving forward 100 steps")\n    print(f"Turning right 90 degrees")',
              },
              {
                title: "Turtle (Not supported)",
                code: '# Note: Turtle graphics are not supported in this playground\n# This is just a simulation\nprint("Drawing a square:")\nfor i in range(4):\n    print(f"Moving forward 100 steps")\n    print(f"Turning right 90 degrees")',
              },
              {
                title: "Turtle (Not supported)",
                code: '# Note: Turtle graphics are not supported in this playground\n# This is just a simulation\nprint("Drawing a square:")\nfor i in range(4):\n    print(f"Moving forward 100 steps")\n    print(f"Turning right 90 degrees")',
              },
              {
                title: "Turtle (Not supported)",
                code: '# Note: Turtle graphics are not supported in this playground\n# This is just a simulation\nprint("Drawing a square:")\nfor i in range(4):\n    print(f"Moving forward 100 steps")\n    print(f"Turning right 90 degrees")',
              },
            ].map((example, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-lg border-2 border-gray-200 hover:border-blue-300 cursor-pointer transition-colors"
                onClick={() => setCode(example.code)}
              >
                <h3 className="font-bold text-blue-600 mb-2">{example.title}</h3>
                <pre className="text-xs text-gray-700 overflow-hidden max-h-24">{example.code}</pre>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

