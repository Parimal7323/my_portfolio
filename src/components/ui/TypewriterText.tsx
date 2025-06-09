'use client'

import { useState, useEffect } from 'react'

interface TypewriterTextProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export function TypewriterText({ 
  texts, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseDuration = 1000 
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[currentIndex]
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(current => current.slice(0, -1))
        
        if (displayText === '') {
          setIsDeleting(false)
          setCurrentIndex((current) => (current + 1) % texts.length)
        }
      } else {
        setDisplayText(currentText.slice(0, displayText.length + 1))
        
        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), pauseDuration)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, texts, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
} 