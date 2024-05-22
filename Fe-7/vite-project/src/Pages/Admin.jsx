import React, { useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import "./Admin.scss"
function Admin() {
    const [Category, setCategory] = useState([])
    const [Search, setSearch] = useState("")
    useEffect(() => {
    GetProduct()
    }, [])
   async function GetProduct() {
        const res= await fetch ("http://localhost:3000/men")
        const data= await res.json()
        setCategory(data)
    }
    async function DeleteProduct(id) {
        const res= await fetch ("http://localhost:3000/men/"+id,{method:"delete"})
        
  GetProduct()
    }
    function Sorted() {
        return setCategory([...Category.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))])
    }
    function SortedByPrice() {
        return setCategory([...Category.sort((a,b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))])
    }
  return (
    <>
    <Helmet>
        <title>Admin</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <input style={{marginTop:"300px"}} value={Search} onChange={(e)=>setSearch(e.target.value)}/>
      <button onClick={()=>Sorted()}>A-z</button>
      <button onClick={()=>SortedByPrice()}>Increase Price</button>
<table>
<thead>
  <tr>
    <th>ID</th>
    <th>Img</th>
    <th>Name</th>
    <th>Price</th>
    <th>Delete</th>
  </tr>
  </thead>
  <tbody>
    {Category.filter((x)=>x.title.toLowerCase().includes(Search.toLowerCase()))
    .map((x)=><>
  <tr key={x._id}>
     <td>{x._id}</td>
     <td><img src={x.img}/></td>
     <td>{x.title}</td>
     <td>{x.price}</td>
     <td><button onClick={()=>DeleteProduct(x._id)}>Delete</button></td>
  </tr>
    </>)}
    </tbody>
    </table>
    </>
  )
}

export default Admin