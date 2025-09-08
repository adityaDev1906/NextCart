import React, {useState} from 'react'
import { useSelector} from 'react-redux'
import { Link } from 'react-router-dom';

const Header = () => {
    const result = useSelector((state) => state.cart);
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <>
            <div>
                <div className="navbar">
                    <div className="nav-logo border">
                        <Link to="/">
                            <div className="logo"></div>
                        </Link>
                    </div>
                    <div className="nav-address border">
                        <p className="add-first">Deliver to</p>
                        <div className="add-icon">
                            <i className="fa-solid fa-location-dot"></i>
                            <p className="add-sec">India</p>
                        </div>
                    </div>
                    <div className="nav-search">
                        <select className="search-select">
                            <option value="">All</option>
                        </select>
                        <input type="text" placeholder="Search Product" className="search-input" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                        <div className="search-icon" >
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    <div className="nav-signin border">
                        <p><span>Hello,sign in</span></p>
                        <p className="nav-second">Account & Lists</p>
                    </div>
                    <div className="nav-return border">
                        <p><span>Returns</span></p>
                        <p className="nav-second">& Orders</p>
                    </div>

                    <Link to="/cart">
                        <div className="nav-cart border">
                            <i className="fa-solid fa-cart-shopping"></i>
                            <span>{result.length}</span>
                            {/* Cart */}
                        </div>
                    </Link>
                </div>
                <div className="panel">
                    <div className="panel-all">
                        <i className="fa-solid fa-bars"></i>
                        All
                    </div>
                    <div className="panel-ops">
                        <p>Today's Deals</p>
                        <p>Customer Service</p>
                        <p>Registry</p>
                        <p>Gift Cards</p>
                        <p>Sell</p>
                    </div>
                    <div className="panel-deals">
                        <p>Shop deals in Electronics</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;