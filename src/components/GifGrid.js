import React from 'react'
import { useGifState } from '../hooks/useGifState';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category }) => {

    const { data:images, loading } = useGifState( category );
    
    return (
        <>
            <h3 className='animate__flip'> { category } </h3>
            { loading && <p className='animate__flash'>Cargando...</p> }
            <div className='card-grid'>
                {
                    images.map( img => {
                        return <GifGridItem
                            key={ img.id } 
                            {...img} />
                    })            
                }
            </div>
        </>
  )
}
