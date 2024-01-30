import React, { useState } from 'react'
import { Fade } from "react-awesome-reveal";
import logo from '../images/logo.png'
import user from '../images/user.png'
import search from '../images/search.png'
import home from '../images/home.png'
import tv from '../images/tv.png'
import movies from '../images/movie.png'
import sports from '../images/tv.png'
import category from '../images/love.png'

function Navbar(props) {

    const [touch,setTouch]= useState(false)

  return (
    <div className='z-20 fixed grid grid-cols-2 bg-black h-full w-24 '>
        <div onMouseEnter={()=>setTouch(true)} onMouseLeave={()=>setTouch(false)}>
            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1656431456/web-images/logo-d-plus.svg" className='w-30 ml-5 mt-5'/>
            <img src={user} className='w-5 ml-9 mt-8 cursor-pointer'/>
            <img src={search} className='w-8 ml-8 mt-6 cursor-pointer'/>
            <img src={home} onClick={()=>{props.setMenu("movie")}} className='w-9 ml-7 mt-5 cursor-pointer'/>
            <img src={tv} onClick={()=>{props.setMenu("tv")}} className='w-10 ml-7 mt-8 cursor-pointer'/>
            <img src={movies} onClick={()=>{props.setMenu("movie")}} className='w-12 ml-6 mt-8 cursor-pointer'/>
            <img src={sports} className='w-10 ml-7 mt-8 cursor-pointer'/>
            <img src={category} className='w-15 ml-5 mt-8 cursor-pointer'/>
        </div>
        {touch && <Fade><div className='fixed bg-opacity-80 z-20 ml-7 w-20 bg-black h-screen font-bold text-base text-slate-300'>
            <h4 className='mt-20'>My Space</h4>
            <h4 className='mt-7'>Search</h4>
            <h4 className='mt-8'>Home</h4>
            <h4 className='mt-9'>TV</h4>
            <h4 className='mt-9'>Movies</h4>
            <h4 className='mt-8'>Sports</h4>
            <h4 className='mt-8'>Categories</h4>
        </div>
        </Fade>}
    </div>
  )
}

export default Navbar