import { Component } from "react";
import { GoogleLogout, GoogleLogin} from "react-google-login"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {actGET_TT,actLogin,actLogut}  from '../action/login'
import Weather from './weather'

class Account extends Component {
    DangNhap = (kq) =>{
        this.props.getTT(kq.profileObj)
        console.log(kq);
        this.props.LOGOUT()
    }
    dangxuat = (kq)=>{
        alert ("bye bye");
        console.log(kq);
        this.props.LOGIN();
        this.props.getTT({})
    }
    render() {
        let id = "52397993862-rm6obv4rir2u08voq0t3no9tiou2nun0.apps.googleusercontent.com";

        return (
            <div>
                <div className="container">
                    <div className="navbar">
                        <div className="logo">
                            <a href="index.html"><img src="./images/logo.png" alt="" width="125px" /></a>
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

                <div className="account-page">
                    <div className="container">
                        <div className="row">
                            <div className="col-2">
                                <img src="./images/image1.png" alt="" width="100%" />
                            </div>
                            <div className="col-2">
                                <div className="form-container">
                                    <div className="form-btn">
                                        <span onClick={this.register}>Đăng Nhập</span>
                                        <hr id="indicator" />
                                    </div>
                                    <form action="" id="loginForm">
                                        {/* <input type="text" placeholder="Tên đăng nhập" />
                                        <input type="password" placeholder="Mật khẩu" />
                                        <button type="submit" className="btn">Đăng Nhập</button>
                                        <a href="">Bạn quên mật khẩu?</a> */}

                                    </form>
                                    <form action="" id="regForm">
                                        <div className="dangnhap">
                                        {this.props.TrangThai?
                                            <GoogleLogin clientId = {id}
                                            buttonText ='dang nhap'
                                            onSuccess = {this.DangNhap} 
                                            onFailure = {this.loginErr} 
                                            cookiePolicy = {'single_host_origin'}
                                            isSignedIn={true} />: 
                                            <GoogleLogout clientId = {id}
                                            buttonText = 'dang xuat'
                                            onLogoutSuccess = {this.dangxuat} />}
                                        </div>
                                    </form>
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


const mapState = (kq) =>{
    return{
        TrangThai: kq.TrangThai
    }
}
const mapDispatch = (kq) =>{
    return{
        getTT: (tt)=>{
            kq(actGET_TT(tt))
        },
        LOGIN: ()=>{
            kq(actLogin())
        },
        LOGOUT: ()=>{
            kq(actLogut())
        }

    }
}

export default connect(mapState,mapDispatch) (Account)