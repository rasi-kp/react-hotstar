import React,{useState} from 'react'
// import avengers from '../images/avengers.png'
import vedio from '../images/vedio.mp4'

function Welcome(props) {
  const [videoSource] = useState('../images/vedio.mp4');

  // console.log(props.movei);
  return (
    // <div style={{backgroundImage:`linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)),
    // url(https://image.tmdb.org/t/p/w500${ props.movei.poster_path})`,backgroundRepeat:"no-repeat",backgroundSize:"1150px 600px"}} className='h-screen grid grid-cols-2'>
    <div className='h-screen grid grid-cols-2'>
      
      <video controls autoPlay loop muted className="absolute inset-0 z-0 object-cover w-full h-full">
        <source src={vedio} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className='ml-2 relative'>
        <h1 className='text-slate-300 pt-40 font-bold text-4xl'>MOANA Live Action</h1>
        <h2 className='text-slate-300 mt-3'>10-12-2023</h2>
        <h3 className='text-slate-300 mt-3 '>Here's our concept trailer for "Moana Live Action," an exhilarating cinematic journey that brings Zendaya's Moana and Dwayne Johnson's Maui to life in a captivating new adaptation. Immerse yourself in the mesmerizing world of Oceania</h3>
        <h2 className='text-yellow-500 font-bold text-3xl mt-8'>Language - en</h2>
        <button className='bg-gray-700 mt-5 w-80 hover:bg-gray-600
            text-white font-bold rounded h-11'>Watch Now</button>
        <button className='ml-5 bg-gray-700 mt-5 w-10 hover:bg-gray-600
            text-white font-bold rounded h-11'>+</button>
      </div>
      
      {/* <div className='ml-2 relative'>
        <h1 className='text-slate-300 pt-40 font-bold text-4xl'>{props?.movei?.original_title ?? props.movei.name}</h1>
        <h2 className='text-slate-300 mt-3'>{props.movei.release_date}</h2>
        <h3 className='text-slate-300 mt-3 '>{props.movei?.overview.substring(0, props?.movei?.overview.indexOf("."))}</h3>
        <h2 className='text-yellow-500 font-bold text-3xl mt-8'>Language - {props?.movei?.original_language}</h2>
        <button className='bg-gray-700 mt-5 w-80 hover:bg-gray-600
            text-white font-bold rounded h-11'>Watch Now</button>
        <button className='ml-5 bg-gray-700 mt-5 w-10 hover:bg-gray-600
            text-white font-bold rounded h-11'>+</button>
      </div> */}
      
    </div>

  )
}

export default Welcome