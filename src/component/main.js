import React,{useState,useEffect} from 'react'
import Nabar from './navbar'
import Wlcome from './welcome'
import Home from './home'

function Main() {
    const [moveis, setMovies] = useState(null)
    const [menu,setMenu]=useState(null)
    const [indexvalue, setCurrentMovieIndex] = useState(0);

    const getMoveis = async () => {
        // await fetch(`https://api.themoviedb.org/3/discover/${menu ? menu :"movie"}?api_key=d66862c3ba43a86a534945cbb76c6d7f`)
        //     .then(res => res.json())
        //     .then(json => setMovies(json.results))

        const response = await fetch(`https://api.themoviedb.org/3/discover/${menu ? menu :"movie"}?api_key=d66862c3ba43a86a534945cbb76c6d7f`);
        const json = await response.json();
        // Extract only the first 6 movies
        const firstSixMovies = json.results.slice(0, 6);
        setMovies(firstSixMovies);
    }
    useEffect(() => {
        getMoveis()
    }, [menu])

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentMovieIndex(prevIndex => {
                if (prevIndex === moveis.length - 1) {
                    return 0;
                } else {
                    return prevIndex + 1;
                }
            });
        }, 5000); 
        return () => clearTimeout(timer);
    }, [indexvalue, moveis]);

     if (!moveis) {
        return <div>Loading...</div>;
    }
    return (
        <div className=' bg-black'>
        <div className='flex h-full w-full'>
            <div className='w-1/12'>
                <Nabar setMenu={setMenu}/>
            </div>
            <div className='w-11/12'>
                <Wlcome movei={moveis && moveis[indexvalue]}/>
            </div>
        </div>
        <div>
            <Home movei={moveis} title="Latest Releases"/>
            <Home movei={moveis} title="Popular Shows"/>
            <Home movei={moveis} title="Drama Movies"/>
            <Home movei={moveis} title="Hotstar Special"/>
        </div>
        </div>
    )
}

export default Main