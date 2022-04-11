// DO NOT DELETE
import React from 'react'
import './App.css'
import Header from './Header.js'
import Description from './Description.js'
/**
 * 
 * @type {React.FC}
 */

 export const App = () => {
    return (
      <div className='dogApp'>
        <Header title={'DogApp'}/>
        <main>
        <Description text={'犬の画像を表示するアプリです'}/>
        </main>
        <div className='line'></div>
      </div>
    )
  }