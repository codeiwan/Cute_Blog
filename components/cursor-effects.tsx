"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CursorEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVisible, setCursorVisible] = useState(false)
  const [stars, setStars] = useState<{ id: number; x: number; y: number }[]>([])
  const [starId, setStarId] = useState(0)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Add a new star
      if (Math.random() > 0.5) {
        const newStar = {
          id: starId,
          x: e.clientX + (Math.random() * 20 - 10),
          y: e.clientY + (Math.random() * 20 - 10),
        }
        setStars((prev) => [...prev, newStar])
        setStarId((prev) => prev + 1)
      }
    }

    // Remove old stars
    const cleanupStars = setInterval(() => {
      setStars((prev) => prev.slice(-20)) // Keep only the last 20 stars
    }, 300)

    // Show cursor when mouse moves
    const showCursor = () => setCursorVisible(true)
    const hideCursor = () => setCursorVisible(false)

    // Add custom cursor styles
    const style = document.createElement("style")
    style.innerHTML = `
      body { 
        cursor: none !important;
      }
      a, button, [role="button"] {
        cursor: none !important;
      }
    `
    document.head.appendChild(style)

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseenter", showCursor)
    window.addEventListener("mouseleave", hideCursor)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseenter", showCursor)
      window.removeEventListener("mouseleave", hideCursor)
      document.head.removeChild(style)
      clearInterval(cleanupStars)
    }
  }, [starId])

  return (
    <>
      {/* Candy cane cursor */}
      {cursorVisible && (
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 z-50 pointer-events-none"
          style={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='%23ff0000' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M7 22a5 5 0 0 1-5-5c0-2.76 2.24-5 5-5 .71 0 1.39.15 2 .42V3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v9.58c.61-.27 1.29-.42 2-.42 2.76 0 5 2.24 5 5a5 5 0 0 1-5 5M7 12a5 5 0 0 0-5 5'%3E%3C/path%3E%3Cpath d='M12 2v20'%3E%3C/path%3E%3Cpath d='M12 13c.74-.5 1.58-.82 2.5-.82a5 5 0 0 1 5 5 5 5 0 0 1-5 5c-.92 0-1.76-.32-2.5-.82'%3E%3C/path%3E%3Cpath d='M12 13c-.74-.5-1.58-.82-2.5-.82a5 5 0 0 0-5 5 5 5 0 0 0 5 5c.92 0 1.76-.32 2.5-.82'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        />
      )}

      {/* Star dust effect */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="fixed w-3 h-3 z-40 pointer-events-none text-yellow-400"
          initial={{ x: star.x, y: star.y, opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            x: star.x,
            y: star.y,
          }}
        >
          ✦
        </motion.div>
      ))}
    </>
  )
}

