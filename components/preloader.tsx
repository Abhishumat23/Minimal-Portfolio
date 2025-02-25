"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const PreLoader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 1
        if (newProgress >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsLoading(false)
            onLoadingComplete()
          }, 500)
          return 100
        }
        return newProgress
      })
    }, 15)

    return () => clearInterval(interval)
  }, [onLoadingComplete])

  if (!isLoading) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-48 h-48">
        {/* Outer rotating circle */}
        <motion.div
          className="absolute inset-0 border-4 border-primary/20 rounded-full"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        {/* Inner rotating circle */}
        <motion.div
          className="absolute inset-4 border-4 border-primary/40 rounded-full"
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        {/* Progress circle */}
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <motion.circle
            cx="96"
            cy="96"
            r="88"
            stroke="hsl(var(--primary))"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: progress / 100 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="drop-shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]"
          />
        </svg>

        {/* Loading text and progress */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <span className="text-4xl font-bold text-primary">{progress}%</span>
            <span className="block text-sm text-muted-foreground">Loading...</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default PreLoader

