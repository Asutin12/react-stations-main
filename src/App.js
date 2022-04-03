// DO NOT DELETE
import './App.css';
import React, { useState } from 'react';
/**
 * 
 * @type {React.FC}
 */
 export const App = () => {
  const [dogUrl,setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg')
  
  const updateImage=()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res=>res.json())
    .then(
      (result) => setDogUrl(result.message),
      (error)=>{console.log(error)}
    );
  }
  console.log(setDogUrl);
    return (
      <div className='dogApp'>
       <header className='header'>
         <h1 className='title'>DogApp</h1>
       </header>
       <main>
        <div className='contents'>
          <p className='text'>犬の画像を表示するサイトです。</p>
          <div className='image-wrapper'>
            <img className='image' src={dogUrl} alt='犬の画像'></img>
            <div className='btn-wrapper'>
            <button className='btn' onClick={updateImage}>更新</button>
            </div>  
          </div>
          <div className='line'>
          </div>   
       </div> 
       </main>
       
      </div>
   )
}