import React, { useEffect, useState } from 'react'
// import Jownwick from '../images/johnwick.png'


function Home(props) {
 
    return (
        <>
        <h1 className='text-slate-300 pl-28 font-bold text-2xl'>{props.title}</h1>
        <div className='grid grid-cols-6 pl-24 pb-7'>
            {props.movei.map((data) => {
                return <>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-2 ml-2">
                        <img className="w-full p-0 " style={{ height: '240px' }} src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="Sunset in the mountains" />
                    </div>
                </>
            })

            }
        </div>


        </>
    )
}

export default Home