import { Component } from "react";
// import { Component } from "react";
import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartProvider";
import { arrSach } from '../data'
import Show1Product from './Show1Product'
import axios from 'axios';
import { actShowId } from "../action/actProduct";
import { addToCart } from "../action/actCart";

class Baocao extends Component{
    render(){
        return(
            <div>
                <div className="container">
                    <div className="navbar">
                        <div className="logo">
                            <Link to="/"><img src="../images/logo.png" alt="" width="125px" /></Link>
                        </div>
                        <nav>
                            <ul id="menuItem">
                            <li><Link to="/">Trang Chủ</Link></li>
                                    <li><Link to="/products">Sản Phẩm</Link></li>
                                    <li><Link to="/account">Tài Khoản</Link></li>
                            </ul>
                        </nav>
                        <Link to="/cart"><img src="../images/cart.png" width="30px" height="30px" alt="" /></Link>
                        <img src="../images/menu.png" alt="" className="menu-icon" />
                    </div>
                    <div className="main">
                        <h4>Báo cáo website</h4>
                        <hr></hr>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-2'>
                                    <p>Database: JSON SERVER</p>
                                </div>
                                <div className="col-2">
                                    <img src="./images/database.png"></img>
                                </div>
                                <div className='col-2'>
                                    <p>Code xây dựng trang chủ</p>
                                </div>
                                <div className="col-2">
                                    <img src="./images/home.png"></img>
                                </div>
                                <div className='col-2'>
                                    <p>Code xây dựng trang sản phẩm</p>
                                </div>
                                <div className='col-2'>
                                    <img src="./images/sanpham.png"></img>
                                </div>
                                <div className='col-2'>
                                    <p>Code xây dựng trang chi tiết sản phẩm</p>
                                </div>
                                <div className="col-2">
                                    <img src="./images/detai.png"></img>
                                </div>
                                <div className='col-2'>
                                    <p>Code xây dựng trang giỏ hàng</p>
                                </div>
                                <div className="col-2">
                                <img src="./images/giohang.png"></img>
                                </div>
                                <div className='col-2'>
                                    <p>Code xây dựng trang đăng nhập thông qua GG</p>
                                </div>
                                <div className='col-2'>
                                <img src="./images/login.png"></img>

                                </div>
                            </div>
                            <hr></hr>
                            <div className='row'>
                                <div className='col-2'>
                                    <p>Sản phẩm trang chủ</p>
                                </div>
                                <div className='col-2'>
                                <img src="./images/sphome.png"></img>

                                </div>
                                <div className='col-2'>
                                    <p>Sản phẩm trang chi tiết</p>

                                </div>
                                <div className='col-2'>
                                <img src="./images/spdetai.png"></img>
                                </div>
                                <div className='col-2'>
                                    <p>Sản phẩm trang đăng</p>
                                </div>
                                <div className='col-2'>
                                <img src="./images/splogin.png"></img>

                                </div>
                                <div className='col-2'>
                                    <p>Sản phẩm trang giỏ hàng</p>
                                </div>
                                <div className='col-2'>
                                <img src="./images/spcart.png"></img>
                                </div>
                                <div className='col-2'>
                                    <h3>Trân thành cảm ơn thầy đã dành thời gian và tâm huyết để đưa ra các bài lab cũng các bài code để e học hỏi được trong thời gian thầy phụ trách môn. <br></br>Cảm ơn thầy rất nhiều</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="footer-col-1">
                                <h3>Tải ứng dụng</h3>
                                <p>Tải xuống bằng di dộng qua ios hoặc android</p>
                                <div className="app-logo">
                                    <img src="../images/app-store.png" alt="" />
                                    <img src="../images/play-store.png" alt="" />

                                </div>
                            </div>
                            <div className="footer-col-2">
                                <img src="../images/logo.png" alt="" />
                            </div>
                            {/* <div className="footer-col-3">
                                <h3>Useful Links</h3>
                                <ul>
                                    <li>Coupons</li>
                                    <li>Blog Posts</li>
                                    <li>Return Policy</li>
                                    <li>Join Affiliate</li>
                                </ul>
                            </div> */}
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

export default Baocao