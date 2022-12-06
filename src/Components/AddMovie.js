import {React,useState} from 'react'
import Modal from 'react-modal';



function AddMovie({AddHandler}) {
  const [modalIsOpen,setIsOpen]=useState(false)
  const [name,setName]=useState("")
  const [date,setDate]=useState("")
  const [rating,setRating]=useState("")
  const [type,setType]=useState("")
  const [image,setImage]=useState("")
  const [description,setDescription]=useState("")
  const [seasons,setSeasons]=useState("")
 
  const open =()=>{
    setIsOpen(true)
  }
  const close =()=>{
    setIsOpen(false)
  }
  const addMovie=()=>{
    const movie ={
         name,date,rating,image,type,description,seasons
    }
    AddHandler(movie)
    close()

  }
  return (
    <div>
       <button onClick={open}> Add Movie</button>
      
      
      <Modal isOpen={modalIsOpen}>
        <div>
          <label>Name</label>
          <input type="text" onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div>
          <label>Rating</label>
          <input type="number" onChange={(e)=>setRating(e.target.value)}/>
        </div>
        <div>
          <label>Image</label>
          <input type="text" onChange={(e)=>setImage(e.target.value)}/>
        </div>
        <div>
          <label>Description</label>
          <input type="text" onChange={(e)=>setDescription(e.target.value)}/>
        </div>
        <div>
          <label>Type</label>
          <input type="text" onChange={(e)=>setType(e.target.value)}/>
        </div>
        <div>
          <label>Date</label>
          <input type="number" onChange={(e)=>setDate(e.target.value)}/>
        </div>
        <div>
          <label>Seasons</label>
          <input type="text" onChange={(e)=>setSeasons(e.target.value)}/>
        </div>
        <div>
          <button onClick={close}>Close</button>
          <button onClick={addMovie}>Submit</button>
        </div>
       </Modal>
    </div>
  )
}

export default AddMovie