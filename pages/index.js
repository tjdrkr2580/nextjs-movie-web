import Seo from './Seo';
import { useEffect, useState } from 'react';
const API_KEY = "94728d9d3895c91dc799bfaa01c45029";

export default function Home() {
    const [movie,setMovie] = useState([]);
    useEffect(()=> {
        (async() => {
            const {results} = await 
                (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
            )
        ).json();
            setMovie(results);
        })();
    },[]);
    
    return (
        <div>
            <Seo title="Home"/>
            {!movie && <h2>Loading...</h2>}{
                movie.map((movie) => (
                <div key={movie.id}>
                    <h4>{movie.original_title}</h4>
                </div> 
            ))}
        </div>
    );
}