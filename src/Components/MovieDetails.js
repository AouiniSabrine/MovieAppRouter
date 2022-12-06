import { useParams } from "react-router-dom";
import {MovieData} from '../MoviesData'

const MovieDetails = () => {
  const { idMovie } = useParams();
  

  console.log( idMovie,"hhhhhhhhhh" );
  return (
    <div>
      <h2>{MovieData.find((el) => el.id === Number( idMovie )).name}</h2>
      <img src={MovieData.find((el) => el.id === Number( idMovie )).image}/>
      <h4>{MovieData.find((el) => el.id === Number( idMovie )).description}</h4>
      <a>{MovieData.find((el) => el.id === Number( idMovie )).trailer}</a>
    </div>
  );
};
export default MovieDetails;