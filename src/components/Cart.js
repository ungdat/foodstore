import { Component } from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {tangSL, giamSL, xoa} from '../action/actCart'
import Weather from "./weather";


function Cart ({ kq, xoa, tangSL, giamSL}) {
    let cart = []
    let tong = 0
    Object.keys(kq.cart).forEach((e) => {
        tong += kq.cart[e].soluong * kq.cart[e].gia
        cart.push(kq.cart[e])
    })
    const tonggia = (gia, tong) => {
        return Number(gia * tong).toFixed(3)
    }
    let trangthai = useSelector((state)=> state.TrangThai)
    return (
        <div>
            {
            trangthai?
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
                            <Link to="/cart"><img src="./images/cart.png" width="30px" height="30px" alt="" /></Link>
                            <img src="./images/menu.png" alt="" className="menu-icon" />
                        </div>
                    </div>
                        <h2 className='messcart'> Bạn phải đăng nhập mới được xem giỏ hàng nhé!</h2>
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
            :<div>
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
                        <Link to="/cart"><img src="./images/cart.png" width="30px" height="30px" alt="" /></Link>
                        <img src="./images/menu.png" alt="" className="menu-icon" />
                    </div>
                </div>


                {cart.length==0 ? <div><h2 className='messcart'>Giỏ hàng đang trống</h2></div> :
                    <div className="small-container cart-page">
                        <table>
                            <thead>
                                <tr>
                                    <th>Sản Phẩm</th>
                                    <th>Số lượng</th>
                                    <th>Tổng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <div className="cart-info">
                                                    <img src={item.urlHinh} alt="" />
                                                    <div>
                                                        <p>{item.tensach}</p>
                                                        <small>Giá:{item.gia.toFixed(3)} VND</small>
                                                        <br />
                                                        <p onClick={()=>xoa(index)}  style={{ color: '#ff523b', cursor: 'pointer', fontSize: '17px' }}>xóa</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td style={{display:"flex"}}>
                                                <div className='tangcart' onClick={()=>giamSL(index)}>-</div>
                                                <div style={{display:"flex",alignItems:"center", textAlign: "center"}}>{item.soluong}</div>
                                                <div className='tangcart' onClick={()=>tangSL(index)}>+</div>
                                            </td>
                                            <td> {tonggia(item.gia, item.soluong)} VND</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <div className="total-price">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Tổng thanh toán</td>
                                        <td>{tong.toFixed(3)} VND</td>
                                    </tr>
                                    <tr>
                                        <td colSpan="2"><a href="" className="btn">Đặt hàng &#8594;</a></td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
            }


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
            }
        </div>
        
    )
}
const mapState = (v) => {
    return {
        kq: v.akak
    }
}
export default connect(mapState, {tangSL,giamSL,xoa})(Cart)