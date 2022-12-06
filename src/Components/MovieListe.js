import MovieCards from './MovieCards'
import { MovieData } from '../MoviesData';
import { Container, Row } from "reactstrap";

function MovieListe ({input}) {
  
  return (
    <div>
      <Container>
        <Row>
      {
       MovieData
       .filter(el=> {
         return el.name.toLowerCase().includes(input.toLowerCase().trim());
       })
        .map(el=>
            <MovieCards el={el}/>
        
          )
      }
        </Row>
      </Container>
    </div>
  )
}
export default MovieListe ; 