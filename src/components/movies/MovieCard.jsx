import React from 'react'

export const MovieCard = ({ movies }) => {
  const API_IMG = import.meta.env.VITE_API_IMG;
	
  return (
		<>
			{
				movies.results.map((movie) => (
					<div className='group relative' key={ movie.id }>
						<img 
							src={ `${ API_IMG }${ movie.poster_path }` }
							alt='Imagen'
							className='rounded-lg'
						/>
						<div className='py-4'>
							<div className='text-sm text-center font-bold'>
								{ movie.original_title }
							</div>
						</div>
					</div>
				))
			}
		</>
  )
}