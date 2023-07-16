import React, { useState, useMemo } from 'react';
import Products from './Products';

const Home = () => {

  const [ searchParams, setSearchParams ] = useState("")

  const myDebounce = (cb, time) => {
    let timer;

    return function(...args){
      if(timer){
        clearTimeout(timer)
      }
  
      timer = setTimeout(cb(...args), time)
    }
    
  };




  return (
    <div className='home'>
      <div className='search__box'>
        <input type='text' value={searchParams} onChange={(e) => myDebounce(setSearchParams(e.target.value), 1000)} placeholder='Type Item to Search' />
      </div>
      <Products params= {searchParams} />

    </div>
  );
}

export default Home;

