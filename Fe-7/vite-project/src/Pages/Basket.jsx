import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { Maincontext } from '../Context/Mainprovider'

function Basket() {
    const {Basket,RemoveBasket,IncreaseBasket,DecreaseBasket,GetTotal} = useContext(Maincontext)
  return (
  <>
    <Helmet>
        <title>Basket</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div >
      <div >
        <div >Total :{GetTotal()}</div>
      </div>
    {
        Basket.map((x)=><>
            <div key={x._id}>
            <img style={{width:"300px"}} src={x.img}/>
            <div> {x.title}</div>
            <div>{x.count}</div>
            <div> ${x.price}</div>
            <button onClick={()=>DecreaseBasket(x)}>-</button>
            <button onClick={()=>RemoveBasket(x)}>X</button>
            <button onClick={()=>IncreaseBasket(x)}>+</button>
            </div>
        </>)
    }
      </div>
  </>
  )
}

export default Basket