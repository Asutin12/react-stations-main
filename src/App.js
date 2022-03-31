// DO NOT DELETE

import * as React from 'react';
import { render } from 'react-dom';
import './App.css';
import React, { useState } from 'react';
/**
 * 
 * @type {React.FC}
 */
 export const App = () => {
  const [dogUrl,setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg')
    return (
      <header>
        <h1>Lumiel</h1>
        <p>犬の画像を表示するサイトです。</p>
        <img src={dogUrl} alt='犬の画像'></img>
      </header>
   )
  
}