import React from 'react'

function DogImage(props){
    return(
        <div>
            <img className='image' src={props.dogUrl} alt="dog" />
        </div>
    )
}
export default DogImage