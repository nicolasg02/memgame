import React from 'react'

type Props = {
  children: React.ReactNode
}

function Body({ children }: Props) {
  return (
    <div className="bg-gray-800 text-gray-200 min-h-screen flex flex-col">
      {children}
    </div>
  )
}

export default Body
