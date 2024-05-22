import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Maincontext } from '../Context/Mainprovider'
import "./Navbar.scss"
function Navbar() {
    const { Basket, Wishlist } = useContext(Maincontext)
    return (
        <div className='Navbar'>
            <div className='Navbar_container'>
                <div className='Navbar_item1'>
                    <img src='https://preview.colorlib.com/theme/shop/img/logo.png' />
                </div>
                <div className='Navbar_item2'>
                    <div className='Navbar_item2_ul'>
                        <ul className='Navbar_item2_list'>
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link>Category</Link></li>
                            <li><Link to={"admin"}>Admin</Link></li>
                            <li><Link to={'add'}>Add</Link></li>
                            <li><Link to={'basket'}>Basket {Basket.length}</Link></li>
                            <li><Link to={'wishlist'}>Wishlist{Wishlist.length}</Link></li>
                        </ul>
                    </div>
                </div>
                <button className='hiddenbtn'><i class="fa-solid fa-bars"></i></button>
            </div>
        </div>
    )
}

export default Navbar