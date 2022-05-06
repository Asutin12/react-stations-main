import  React from 'react'


export const Header = (props) =>{
    return(
        <div className="header">
            <h1 className='title'>{props.title}</h1>
        </div>
    )
}