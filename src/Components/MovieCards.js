import React from 'react'
import ReactStars from 'react-stars'
import{ Button} from "reactstrap";
import { Link } from "react-router-dom";



function MovieCards({el}) {
  return (
    <div>
     
      
            <h2>{el.name}</h2>
           <img src={el.image}/>
            <Button className="px-0 bg-info" color="link">
              <Link to={`/moviedetails/${el.id}`}>Movie Details</Link>
            </Button>
         
    
      <ReactStars
      count={5}
      value={el.rating}
      edit={false}
      size={24}
      color2={'#ffd700'}/>


      
    
    </div>
  )
}

export default MovieCards