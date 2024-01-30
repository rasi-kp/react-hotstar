import React from 'react'
import avengers from '../images/avengers.png'

function welcome(props) {
  console.log(props.movei);
  return (
    <div style={{backgroundImage:`linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)),
    url(https://image.tmdb.org/t/p/w500${ props.movei.poster_path})`,backgroundRepeat:"no-repeat",backgroundSize:"1200px 900px"}} className='h-screen grid grid-cols-2'>
        <div className='ml-2'>
            <h1 className='text-slate-300 pt-40 font-bold text-4xl'>{props?.movei?.original_title ?? props.movei.name}</h1>
            <h2 className='text-slate-300 mt-3'>{props.movei.release_date}</h2>
            <h3 className='text-slate-300 mt-3 '>{props.movei?.overview.substring(0,props?.movei?.overview.indexOf("."))}</h3>
            <h2 className='text-yellow-500 font-bold text-3xl mt-8'>Language - {props?.movei?.original_language}</h2>
            <button className='bg-gray-700 mt-5 w-80 hover:bg-gray-600
            text-white font-bold rounded h-11'>Watch Now</button>
            <button className='ml-5 bg-gray-700 mt-5 w-10 hover:bg-gray-600
            text-white font-bold rounded h-11'>+</button>
            
        </div>
        </div>
  )
}

export default welcome