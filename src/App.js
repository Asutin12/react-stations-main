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
      (result) => {setDogUrl(()=>{result.message});},
      (error)=>{console.log(error)}
    );
  }
  console.log(setDogUrl);
    return (
      <div>
      <header>
        <h1>DogApp</h1>
      </header>
        <p>犬の画像を表示するサイトです。</p>
        <img src={dogUrl} alt='犬の画像'></img>
        <div>
        <button onClick={updateImage}>更新</button>
        </div>
      </div>
   )
}