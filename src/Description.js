import React from 'react';
import {DogImage} from './DogImage.js';
import  {useState} from 'react';

export const Description=(props)=>{
  const [dogUrl,setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg')
  const updateImage=()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res=>res.json())
    .then(
      (result) => setDogUrl(result.message),
      (error)=>{console.log(error)}
    );}
    return(
      <div>
        <p className='text'>{props.text}</p>
        <DogImage url={dogUrl}/>
        <button className='btn' onClick={updateImage}>更新</button>
      </div>
    );
};