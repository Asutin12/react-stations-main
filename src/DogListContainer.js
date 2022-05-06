// DO NOT DELETE
import React from 'react';
import {useState,useEffect} from 'react';


export const DogListContainer = () => {
    const [breeds, setBreeds] = useState([]);
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => res.json())
        .then((result) => setBreeds(result.message),
        (error) => {console.log(error)}
    )}, [breeds])
    return (
        <div className='dogListContainer'>
            <h1>Breeds List</h1>
            <form>
                <select>
                    {breeds &&Object.keys(breeds).map(breed => <option key={breeds} >{breeds}</option>)}
                </select>
            </form>
        </div>
    )
}