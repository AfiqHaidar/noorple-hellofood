import { useQuery } from "react-query";
import { getPopularMovies } from "@/pages/api/rq-tmdbApi";
import Image from "next/image";
import { Head } from "next/document";

const PopularMovies = () => {
  const { isLoading, isError, data, error } = useQuery(
    "popularMovies",
    () => getPopularMovies(1)
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <>Error: {error}</>;

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {data.results.map((movie: any) => (
           <div className='p-2 bg-slate-200 m-2 w-[90px]'>
           {/* <div>
            <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="movie"
            width={200}
            height={300}/>
        </div> */}
        <div >
              <li key={movie.id}>
             <div className='text-slate-700 p-2 bg-slate-300 rounded-xl m-2 w-full'>
             <div >
                 {movie.id}
             </div>
             <div className='line-clamp-3'>
                 {movie.title}
             </div>
               </div> 
             </li> 
        </div>
        </div>
        ))}
      </ul>
    </div>
  );
};

export default PopularMovies;