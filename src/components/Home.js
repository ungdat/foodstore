import { Component } from 'react';
import { Link } from 'react-router-dom';
import Show1Product from './Show1Product';
import { connect } from 'react-redux';
import Weather from './weather';
class Home extends Component {

    render() {

        let featuredBook = this.props.arrPro.map((book, index) => {
            if (book.hot === 1) {
                return (
                    <Show1Product key={index}
                        id={book.id}
                        product={book}
                        author={book.tacGia}
                        name={book.tensach}
                        price={book.gia}
                        url={book.urlHinh} />
                )
            }
        })
        let latestBook = this.props.arrPro.map((book, index) => {
            if (book.moi === 1) {
                return (
                    <Show1Product key={index}
                        id={book.id}
                        product={book}
                        author={book.tacGia}
                        name={book.tensach}
                        price={book.gia}
                        url={book.urlHinh} />
                )
            }

        })
        return (
            <div>
                <div className="header">
                    <div className="container">
                        <div className="navbar">
                            <div className="logo">
                                <Link to="/"><img src="./images/logo.png" alt="" width="125px" /></Link>
                            </div>
                            <nav>
                                <ul id="menuItem">
                                <li><Link to="/">Trang Chủ</Link></li>
                                <li><Link to="/products">Sản Phẩm</Link></li>
                                <li><Link to="/account">Tài Khoản</Link></li>
                                <li><Link to="/baocao">Báo Cáo</Link></li>
                                </ul>
                            </nav>
                            <Link to="/cart"><img src="./images/cart.png" width="30px" height="30px" alt="" /></Link>
                            <img src="./images/menu.png" alt="" className="menu-icon" />
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <h1>HOA QUẢ SIÊU SẠCH</h1>
                                <p></p>
                                <Link to="/products" className="btn">Mời lối này &#8594;</Link>
                            </div>
                            <div className="col-2">
                                <img src="./images/image1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* featured products */}

                <div className="categories small-container">
                    <h2 className="title">SẢN PHẨM NỔI BẬT</h2>
                    <div className="row-1">
                        {featuredBook}
                    </div>
                    <h2 className="title">SẢN PHẨM MỚI</h2>
                    <div className="row-1">
                        {latestBook}
                    </div>
                </div>

                {/* offer */}
                <div className="offer">
                    <div className="small-container">
                        <div className="row">
                            <div className="col-2">
                                <img src="./images/exclusive.png" alt="" className="offer-img" />
                            </div>
                            <div className="col-2">
                                <p></p>
                                <h1>SẢN PHẨM <br /> GIỚI HẠN</h1>
                                <small>
                                </small>
                                <div><a href="" className="btn">Mua ngay &#8594;</a></div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* testimonial
                <div className="testimonial">
                    <div className="small-container">
                        <div className="row">
                            <div className="col-3">
                                <i className="fa fa-quote-left"></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-o"></i>
                                </div>
                                <img src="./images/user-1.png" alt="" />
                                <h3>Sean Parker</h3>
                            </div>
                            <div className="col-3">
                                <i className="fa fa-quote-left"></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-o"></i>
                                </div>
                                <img src="./images/user-2.png" alt="" />
                                <h3>Mike Smith</h3>
                            </div>
                            <div className="col-3">
                                <i className="fa fa-quote-left"></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <div className="rating">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-o"></i>
                                </div>
                                <img src="./images/user-3.png" alt="" />
                                <h3>Mabel Joe</h3>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* brands */}
                <div className="brands">
                    <div className="small-container">
                        <div className="row">
                            <div className="col-5">
                                <img src="./images/logo-godrej.png" alt="" />
                            </div>
                            <div className="col-5">
                                <img src="./images/logo-coca-cola.png" alt="" />
                            </div>
                            <div className="col-5">
                                <img src="./images/logo-oppo.png" alt="" />
                            </div>
                            <div className="col-5">
                                <img src="./images/logo-paypal.png" alt="" />
                            </div>
                            <div className="col-5">
                                <img src="./images/logo-philips.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* footer */}
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="footer-col-1">
                                <h3>Tải ứng dụng</h3>
                                <p>Tải xuống bằng di dộng qua ios hoặc android</p>
                                <div className="app-logo">
                                    <img src="./images/app-store.png" alt="" />
                                    <img src="./images/play-store.png" alt="" />

                                </div>
                            </div>
                            <div className="footer-col-2">
                                <img src="./images/logo.png" alt="" />
                            </div>
                            <div className="footer-col-3">
                                <Weather />
                            </div>
                            <div className="footer-col-4">
                                <h3>Theo dõi</h3>
                                <ul>
                                    <li>Facebook</li>
                                    <li>Twitter</li>
                                    <li>Instagram</li>
                                    <li>Youtube</li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <p className="copyright">Sinh Viên: Ừng Quốc Đạt - PS14131</p>
                    </div>
                </div>
            </div>
        )
    }
}
const layData = (state)=>{
    return{
        arrPro:state.pro,
    }
}
export default connect(layData, null)(Home)