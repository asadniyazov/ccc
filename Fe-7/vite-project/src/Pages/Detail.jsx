import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Detail() {
    const { id } = useParams();
    const [Category, setCategory] = useState([])
    useEffect(() => {
    GetProductByid()
    }, [])
   async function GetProductByid() {
        const res= await fetch ("http://localhost:3000/men/"+id)
        const data= await res.json()
        setCategory(data)
    }
  return (
    <>
 <div style={{marginTop:"300px"}}>
    <img src={Category.img}/>
    <div> {Category.title}</div>
    <div>{Category.price}</div>
 </div>
    </>
  )
}

export default Detail