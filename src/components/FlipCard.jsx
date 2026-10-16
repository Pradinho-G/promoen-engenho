
import { useState } from 'react'

export default function FlipCard({ title, description, icon }) {
  const [flipped, setFlipped] = useState(false)

  const handleFlip = () => {
    setFlipped((previous) => !previous)
  }

  return (
    <div
      className="group h-64 w-full cursor-pointer [perspective:1000px]"
      onClick={handleFlip}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          handleFlip()
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Ver informações sobre ${title}`}
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Frente do card */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-900 p-6 text-white shadow-lg [backface-visibility:hidden]">
          <span className="mb-4 text-5xl">{icon}</span>

          <h3 className="text-center text-2xl font-bold">
            {title}
          </h3>

          <p className="mt-3 text-center text-sm text-blue-100">
            Passe o mouse ou clique para saber mais
          </p>
        </div>

        {/* Verso do card */}
        <div className="absolute inset-0 flex flex-col justify-center rounded-3xl bg-white p-6 text-slate-800 shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <h3 className="mb-4 text-center text-xl font-bold text-blue-800">
            {title}
          </h3>

          <p className="text-center text-sm leading-6 text-slate-600">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}