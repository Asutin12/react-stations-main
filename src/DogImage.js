import React from 'react'

export const DogImage = (props) =>{
    const {url} = props
    
    return(
            <img className='image' src={url} />
    )
}