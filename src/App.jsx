import { useState, useMemo, useCallback, useEffect } from 'react'
import './App.css'
import heartImage from './assets/me&her.JPG'

const HEARTS = ['❤️', '💕', '💗', '💖', '💝', '🩷', '💓']

function App() {
  const [saidYes, setSaidYes] = useState(false)
  const [noPosition, setNoPosition] = useState(null)
  const [celebrationHearts, setCelebrationHearts] = useState([])

  const floatingHearts = useMemo(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      emoji: HEARTS[Math.floor(Math.random() * HEARTS.length)],
      delay: Math.random() * 2,
    }))
  }, [])

  const handleNoClick = useCallback(() => {
    const padding = 80
    const maxX = window.innerWidth - padding
    const maxY = window.innerHeight - padding
    setNoPosition({
      left: padding + Math.random() * (maxX - padding),
      top: padding + Math.random() * (maxY - padding),
    })
  }, [])

  const handleYesClick = useCallback(() => {
    setSaidYes(true)
    const baseId = Date.now()
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        setCelebrationHearts((prev) => [
          ...prev,
          { id: baseId + i, left: 30 + Math.random() * 40, bottom: 20 + Math.random() * 30 },
        ])
      }, i * 80)
    }
  }, [])

  useEffect(() => {
    if (!saidYes) return
    const t = setTimeout(() => setCelebrationHearts((prev) => prev.slice(-15)), 3000)
    return () => clearTimeout(t)
  }, [saidYes])

  return (
    <div className="app">
      <div className="floating-hearts">
        {floatingHearts.map(({ id, left, top, emoji, delay }) => (
          <span
            key={id}
            className="floating-heart"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animationDelay: `${delay}s`,
            }}
          >
            {emoji}
          </span>
        ))}
      </div>

      {saidYes && (
        <div className="celebration">
          {celebrationHearts.map(({ id, left, bottom }) => (
            <span
              key={id}
              className="celebration-heart"
              style={{
                left: `${left}%`,
                bottom: `${bottom}%`,
                animationDelay: `${(id % 10) * 0.08}s`,
              }}
            >
              {HEARTS[id % HEARTS.length]}
            </span>
          ))}
        </div>
      )}

      <div className="content">
        <div className={`heart-wrapper ${saidYes ? 'revealed' : ''}`}>
          <svg
            className="heart-svg"
            viewBox="0 0 220 220"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <clipPath id="heartClip">
                <path d="M 110 20 C 60 0 0 40 0 90 C 0 140 50 180 110 220 C 170 180 220 140 220 90 C 220 40 160 0 110 20 Z" />
              </clipPath>
              <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff6b8a" />
                <stop offset="50%" stopColor="#ff8fa3" />
                <stop offset="100%" stopColor="#ffb3c6" />
              </linearGradient>
            </defs>
            <rect width="220" height="220" fill="url(#heartGrad)" clipPath="url(#heartClip)" />
            <image
              href={encodeURI(heartImage)}
              x="0"
              y="0"
              width="220"
              height="220"
              preserveAspectRatio="xMidYMid meet"
              clipPath="url(#heartClip)"
              style={{
                opacity: saidYes ? 1 : 0,
                transition: 'opacity 0.6s ease 0.3s',
              }}
            />
          </svg>
        </div>

        <h1 className="question">Would you be my Valentine?</h1>

        <div className="buttons">
          <button type="button" className="btn btn-yes" onClick={handleYesClick}>
            Yes
          </button>
          {!saidYes && (
            <button
              type="button"
              className="btn btn-no"
              onClick={handleNoClick}
              style={
                noPosition
                  ? {
                      position: 'fixed',
                      left: noPosition.left,
                      top: noPosition.top,
                      transform: 'translate(-50%, -50%)',
                    }
                  : undefined
              }
            >
              No
            </button>
          )}
        </div>

        {saidYes && (
          <p className="celebration-message">You just made my day! 💕</p>
        )}
      </div>
    </div>
  )
}

export default App
