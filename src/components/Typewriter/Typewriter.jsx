import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import styles from './Typewriter.module.css'

const Typewriter = () => {
  const [text] = useTypewriter({
    words: [
      'What is inspiring you today?',
      'What is scaring you?',
      'What are you currently learning?',
      'What makes you smile?',
      'Share your latest achievement.',
      'What is exciting you?',
      'What challenge are you overcoming?',
      'Share your latest achievement.',
      'What is motivating you right now?',
      'What goal are you pursuing today?',
      'What new idea do you have?',
      'What are you curious about?',
      'What are you currently learning?',
      'What makes you smile?',
      'What are you grateful for?',
      'Share your favorite quote.',
      'What is your passion?',
      'What problem are you solving?',
      'What lesson did you learn recently?',
      "What's your next adventure?",
      'Describe your dream project.',
      'What are you most proud of?',
      "What's a book that inspires you?",
      'Describe your vision for the future.',
      "What's your top priority right now?",
      'Share a favorite memory.'
    ],
    loop: 0, // Set to 0 for infinite loop
    typeSpeed: 50,
    deleteSpeed: 30,
    delaySpeed: 2000
  })

  return (
    <div className={styles.typingContainer}>
      <span style={{ display: 'inline' }}>{text}</span>
      <Cursor />
    </div>
  )
}

export default Typewriter
