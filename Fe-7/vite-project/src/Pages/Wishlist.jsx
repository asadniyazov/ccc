import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { Maincontext } from '../Context/Mainprovider'

function Wishlist() {
    const {Wishlist,AddWishlist,IsExisted} = useContext(Maincontext)
  return (
   <>
    <Helmet>
        <title>wishlist</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div >
    
    {
        Wishlist.map((x)=><>
            <div  key={x._id}>
            <div onClick={()=>AddWishlist(x)}>{IsExisted(x) ? <i class="fa-solid fa-heart"></i>  :<i class="fa-regular fa-heart"></i> }</div>
            <img style={{width:"300px"}} src={x.img}/>
            <div> {x.title}</div>
            <div>{x.count}</div>
            <div> ${x.price}</div>
         
            </div>
        </>)
    }
      </div>
   </>
  )
}

export default Wishlist