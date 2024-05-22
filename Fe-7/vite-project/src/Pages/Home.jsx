import React, { useContext, useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Maincontext } from '../Context/Mainprovider';
import './Home.scss'
function Home() {
    const { AddBasket, AddWishlist, IsExisted } = useContext(Maincontext)
    const [Category, setCategory] = useState([])
    useEffect(() => {
        GetProduct()
    }, [])
    async function GetProduct() {
        const res = await fetch("http://localhost:3000/men")
        const data = await res.json()
        setCategory(data)
    }
    return (
        <>
            <Helmet>
                <title>Home</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>

            <section className='Herosection'>
                <div className='Herosection_container'>
                    <div className='Herosection_div1'>
                        <img className='Herosection_div1_img' src='https://preview.colorlib.com/theme/shop/img/header-img.png' />
                    </div>
                    <div className='Herosection_div2'>
                        <div className='Herosection_div2_text1'>
                            <div className='Herosection_div2_text1_1'>Flat </div>
                            <div className='Herosection_div2_text1_2'>75%Off</div>
                        </div>
                        <div className='Herosection_div2_text2'>IT’S HAPPENING THIS SEASON!</div>
                        <button className='Herosection_div2_btn' >Purchase Now</button>
                    </div>
                </div>
            </section>
            <section className='Middlesection'>
                <div className='Middlesection_container'>
                    <div className='Middlesection_div'>
                        <div className='Midddlesection_div_text1'>Shop for Different Categories</div>
                        <div className='Midddlesection_div_text2'>Who are in extremely love with eco friendly system.</div>
                        <div className='Middlesection_div_img'>
                            <div className='Middlesection_div_img1'>
                                <div className='Middlesection_div_img1_1'>
                                    <div >
                                        <img className='Middlesection_div_img1_1_1' src='https://preview.colorlib.com/theme/shop/img/c1.jpg' />
                                    </div>
                                    <div>
                                        <img src='https://preview.colorlib.com/theme/shop/img/c2.jpg' />
                                    </div>
                                </div>
                                <div className='Middlesection_div_img1_2'>
                                    <div>
                                        <img src='https://preview.colorlib.com/theme/shop/img/c3.jpg' />
                                    </div>
                                </div>
                            </div>
                            <div className='Middlesection_div_img2'>
                                <img src='https://preview.colorlib.com/theme/shop/img/c4.jpg' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='Thirdsection'>
                <div className='Thirdsection_container'>
                    <div className='Thirdsection_div'>
                        <div className='Thirdsection_text'>
                            <div className='Thirdsection_text1'> New realeased Products for Men </div>
                            <div className='Thirdsection_text2'> Who are in extremely love with eco friendly system. </div>
                        </div>
                        <div className='Thirdsection_card'>
                            <div className='Card'>
                                <img src='https://preview.colorlib.com/theme/shop/img/l1.jpg.webp' />
                                <div className='Card_div1'>Long Sleeve shirt</div>
                                <div className='Card_div2'>150.00$</div>
                            </div>

                            <div className='Card'>
                                <img src='https://preview.colorlib.com/theme/shop/img/l2.jpg.webp' />
                                <div className='Card_div1'>Long Sleeve shirt</div>
                                <div className='Card_div2'>150.00$</div>
                            </div>

                            <div className='Card'>
                                <img src='https://preview.colorlib.com/theme/shop/img/l3.jpg.webp' />
                                <div className='Card_div1'>Long Sleeve shirt</div>
                                <div className='Card_div2'>150.00$</div>
                            </div>

                            <div className='Card'>
                                <img src='https://preview.colorlib.com/theme/shop/img/l4.jpg.webp' />
                                <div className='Card_div1'>Long Sleeve shirt</div>
                                <div className='Card_div2'>150.00$</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='Fourthsection'>
                <div className='Fourthsection_container'>
                    <div className='Fourthsection_div'>
                        <div className='Fourthsection_text'>
                            <div className='Fourthsection_text1'> New realeased Products for Women </div>
                            <div className='Fourthsection_text2'>Who are in extremely love with eco friendly system. </div>
                        </div>
                <div className='Fourthsection_card'>
                {
                    Category.map((x) => <>
                        <div className='Card' key={x._id}>
                            <div className='icon11' onClick={() => AddWishlist(x)}>{IsExisted(x) ? <i class="fa-solid fa-heart"></i> : <i class="fa-regular fa-heart"></i>}</div>
                            <img style={{ width: "300px" }} src={x.img} />
                            <div className='Card_div1' > {x.title}</div>
                            <button><Link to={"/detail/" + x._id}>Go Detail</Link></button>
                            <button onClick={() => AddBasket(x)}>Add Basket</button>
                            <div className='Card_div2'> ${x.price}</div>
                        </div>
                    </>)
                }
                </div>
                    </div>
                </div>
            </section>
            

            <section className='Fivesection'>
                <div className='Fivesection_container'>
                    <div className='Fivesection_div'>
                        <div className='Fivesection_text'>
                            <div className='Fivesection_text1'> New realeased Products for Women </div>
                            <div className='Fivesection_text2'>Who are in extremely love with eco friendly system. </div>
                        </div>
                <div className='Fivesection_card'>
               
                </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default Home