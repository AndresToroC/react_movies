import React from 'react'
import { Header } from '../elements/Header'

export const MovieScreen = () => {
  return (
    <>
			<Header />

      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
          </div>
        </div>
      </main>
    </>
  )
}