import React from 'react'

function Loading(): JSX.Element {
  // loader spiner tailwind
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-brand-pink-accent" />
    </div>
  )
}

export default Loading
